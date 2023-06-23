const pg = require('pg');
const express = require('express');
const router = express.Router();
const mysql = require('../databases/mysqlClient')
const {signupValidation, loginValidation} = require('./validation');
const {Op} = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require("express-validator");
const db = require('../mainDatabase/db');
const initModels = require('../mainDatabase/models/init-models')
const models = initModels(db)

const secretKey = 'BQuhVBupZGnKroT1lIMoo3YsdhEb05YWVMcn5rrSY5vqz5dH5ZTBpiQtZiziFkE'
const tokenExpiration = '24h'
const cookieMaxAge = 24*60*60*1000

const telecommandKind = {
    '0': 'change_balloon_mode',
    '1': 'start_manual_control',
    '2': 'stop_manual_control',
    '3': 'control_experiment_heater',
    '4': 'restart_device',
    '5': 'change_tm_mode'
}

const authMiddleware = (req, res, next) => {
    const theToken = req.cookies.authToken
    if (!theToken) {
        return res.status(422).json({msg: "The authentication session has expired. Please login again"})
    } else {
        try {
            req.body.tokenData = jwt.verify(theToken, secretKey)
            next()
        } catch (error) {
            return res.status(400).send({msg: error.name})
        }
    }
}


router.post('/auth/register', signupValidation, (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({msg: validationErrors.errors.map(e => e.msg)})
    }
    mysql.query(`SELECT * FROM user WHERE LOWER(username) = LOWER(?)`, req.body.username, (err, result) => {
        if (result.length) {
            return res.status(409).send({msg: 'This user is already in use'})
        } else {
            // username is available
            mysql.query(`SELECT * FROM user WHERE LOWER(email) = LOWER(?)`, req.body.email, (err, result) => {
                if (result.length) {
                    return res.status(409).send({msg: 'This email is already in use'})
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).send({msg: err})
                        } else {
                            // has hashed pw => add to database
                            mysql.query(`INSERT INTO user (username, password, email, createdAt, lastLogin) VALUES (? , ? , ? , now(), now())`,
                                [req.body.username, hash, req.body.email], (err, result) => {
                                    if (err) {
                                        return res.status(400).send({msg: err.sqlMessage})
                                    }
                                    mysql.query(`SELECT BIN_TO_UUID(id, true) AS id, username, email, admin FROM user WHERE LOWER(username) = LOWER(?)`, req.body.username, (err, result) => {
                                        if (err) {
                                            return res.status(400).send({msg: err.sqlMessage})
                                        }
                                        const user = result[0]
                                        const token = jwt.sign({user: user}, secretKey, {expiresIn: tokenExpiration})
                                        return res.status(200).cookie("authToken", token, {
                                            httpOnly: true,
                                            secure: true,
                                            sameSite: 'lax',
                                            maxAge: cookieMaxAge
                                        }).send({user: user})
                                    })
                                })
                        }
                    })
                }
            })
        }
    })
})


router.post('/auth/login', loginValidation, (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({msg: validationErrors.errors.map(e => e.msg)})
    }
    mysql.query(`SELECT BIN_TO_UUID(id, true) AS id, username, email, admin, password FROM user WHERE username = ?`, req.body.username,(err, result) => {
        // user does not exists
        if (err) {
            return res.status(400).send({msg: err.sqlMessage})
        }
        if (!result.length) {
            return res.status(401).send({msg: 'Username or password is incorrect'})
        }
        const user = result[0]
        const compactUser = {id: user.id, username: user.username, email: user.email, admin: user.admin}
        // check password
        bcrypt.compare(req.body.password, user.password, (bErr, bResult) => {
            // wrong password
            if (bErr) {
                return res.status(401).send({msg: 'Username or password is incorrect'})
            }
            if (bResult) {
                const token = jwt.sign({user: compactUser}, secretKey,{expiresIn: tokenExpiration})
                mysql.query(`UPDATE user SET lastLogin = now() WHERE BIN_TO_UUID(id, true) = ?`, user.id)
                return res.status(200).cookie("authToken", token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'lax',
                    maxAge: cookieMaxAge
                }).send({user: compactUser})
            }
            return res.status(401).send({msg: 'Username or password is incorrect'})
        })
    })
})

router.get('/auth/logout', (req, res, next) => {
    const theToken = req.cookies.authToken
    if (!theToken) {
        return res.status(422).json({msg: "Please provide the token"})
    }
    return res.clearCookie("authToken", {httpOnly: true, secure: true, sameSite: 'lax'}).status(200).json({msg: "Successfully logged out"})
})


router.get('/auth/get-user', authMiddleware, (req, res, next) => {
    const tokenData = req.body.tokenData
    mysql.query('SELECT BIN_TO_UUID(id, true) AS id, username, email, admin FROM user where BIN_TO_UUID(id, true)=?', tokenData.user.id, (error, results, fields) => {
        if (error || results.length === 0) {
            return res.status(400).send({msg: error?.sqlMessage || 'User not found'})
        }
        const user = results[0]
        return res.send({user: user})
    })
})


const dateIntervalMiddleware = (req, res, next) => {
    let {start, end} = req.query
    start = parseInt(start)
    end = parseInt(end)
    start = start ? Math.min(Math.abs(start), 2147483647) : start
    end = end ? Math.min(Math.abs(end), 2147483647) : end
    if (start && !end) {
        end = 2147483647
    } else if (!start && end) {
        start = 0
    }
    req.dateWhere = undefined
    if (!isNaN(start) && !isNaN(end)) {
        req.dateWhere = {'$timestamp_secs.data$': {[Op.between]: [start, end]}}
    }
    next()
}


router.get('/telemetry/:type', authMiddleware, dateIntervalMiddleware, (req, res, next) => {
    let type = req.params.type.toLowerCase()
    if (type !== 'hk' && type !== 'sc') {
        return res.status(400).send({msg: "Incorrect telemetry type"})
    }

    if (type === 'sc') {
        models.SC_TM_Type.findAll({include: {all: true, nested: true}, where: req.dateWhere, order: [["iid", "DESC"]]})
            .then(r => res.send(r))
            .catch(error => res.status(400).send({msg: error.message}))
    } else {
        models.HK_TM_Type.findAll({include: {all: true, nested: true}, where: req.dateWhere, order: [["iid", "DESC"]]})
            .then(r => res.send(r))
            .catch(error => res.status(400).send({msg: error.message}))
    }
})


router.get('/telecommand', authMiddleware, (req, res, next) => {
    models.TC_Type.findAll({include: {all: true, nested: true}, order: [["iid", "DESC"]]})
        .then(r => res.send(r))
        .catch(error => res.status(400).send({msg: error.message}))
})

router.get('/telecommand/sent', authMiddleware, (req, res, next) => {
    models.TC_Type_Sent.findAll()
        .then(r => res.send(r.map(e => e.iid)))
        .catch(error => res.status(400).send({msg: error.message}))
})

router.get('/telecommand/kind', authMiddleware, (req, res, next) => {
    res.send(telecommandKind)
})

router.post('/telecommand/:id', authMiddleware, async (req, res, next) => {
    const id = parseInt(req.params.id)

    try{
        const tc = await db.transaction(async (t) => {
            let sent = await models.TC_Type_Sent.findAll({transaction: t})
            sent = sent.map(e => e.iid)
            if (sent.includes(id)) {
                return sent
            }
            const currentTC = await models.TC_Type.findByPk(id, {include: {all: true, nested: true}, transaction: t})
            const edit = telecommandKind[currentTC?.kind]

            if (currentTC?.change_balloon_mode?.new_mode?.data !== req.body.newTC?.change_balloon_mode?.new_mode?.data && edit === 'change_balloon_mode') {
                await models.Balloon_Mode.update({data: req.body.newTC?.change_balloon_mode?.new_mode?.data}, {
                    where: {iid: currentTC?.change_balloon_mode?.new_mode?.iid}, transaction: t
                })
            }
            if (currentTC?.control_experiment_heater?.heater_power?.data !== req.body.newTC?.control_experiment_heater?.heater_power?.data && edit === 'control_experiment_heater') {
                await models.Heater_Power_Type.update({data: req.body.newTC?.control_experiment_heater?.heater_power?.data}, {
                    where: {iid: currentTC?.control_experiment_heater?.heater_power?.iid}, transaction: t
                })
            }
            if (currentTC?.control_experiment_heater?.heater?.data !== req.body.newTC?.control_experiment_heater?.heater?.data && edit === 'control_experiment_heater') {
                await models.Heater_ID.update({data: req.body.newTC?.control_experiment_heater?.heater?.data}, {
                    where: {iid: currentTC?.control_experiment_heater?.heater?.iid}, transaction: t
                })
            }
            if (currentTC?.start_manual_control?.heater?.data !== req.body.newTC?.start_manual_control?.heater?.data && edit === 'start_manual_control') {
                await models.Heater_ID.update({data: req.body.newTC?.start_manual_control?.heater?.data}, {
                    where: {iid: currentTC?.start_manual_control?.heater?.iid}, transaction: t
                })
            }
            if (currentTC?.stop_manual_control?.heater?.data !== req.body.newTC?.stop_manual_control?.heater?.data && edit === 'stop_manual_control') {
                await models.Heater_ID.update({data: req.body.newTC?.stop_manual_control?.heater?.data}, {
                    where: {iid: currentTC?.stop_manual_control?.heater?.iid}, transaction: t
                })
            }
            if (currentTC?.change_tm_mode?.new_mode?.data !== req.body.newTC?.change_tm_mode?.new_mode?.data && edit === 'change_tm_mode') {
                await models.TMTC_Mode.update({data: req.body.newTC?.change_tm_mode?.new_mode?.data}, {
                    where: {iid: currentTC?.change_tm_mode?.new_mode?.iid}, transaction: t
                })
            }
            if (currentTC?.restart_device?.device_id?.data !== req.body.newTC?.restart_device?.device_id?.data && edit === 'restart_device') {
                await models.Restartable_Device_ID.update({data: req.body.newTC?.restart_device?.device_id?.data}, {
                    where: {iid: currentTC?.restart_device?.device_id?.iid}, transaction: t
                })
            }
            return await models.TC_Type.findByPk(id, {include: {all: true, nested: true}, transaction: t})
        })
        if (Array.isArray(tc)) {
            res.status(400).send({msg: 'TC not edited. Already sent', sentIds: tc})
        } else {
            res.send(tc)
        }
    } catch(error) {
        res.status(400).send({msg: error.message})
    }
})

router.post('/telecommand', authMiddleware, async (req, res, next) => {
    const {kind, data, data2} = req.body
    const type = telecommandKind[kind]
    if (!type) {
        return res.status(400).send({msg: 'Invalid telecommand'})
    }

    try{
        const tc = await db.transaction(async (t) => {
            if (type === 'change_balloon_mode') {
                const newData = await models.Balloon_Mode.create({data: data}, {transaction: t})
                const tcType = await models.TC_Change_Balloon_Mode.create({fk_new_mode_iid: newData.iid}, {transaction: t})
                const telecommand = await models.TC_Type.create({kind: kind, fk_change_balloon_mode_iid: tcType.iid}, {transaction: t})
                return await models.TC_Type.findByPk(telecommand.iid, {transaction: t, include: {all: true, nested: true}})
            } else if (type === 'start_manual_control') {
                const newData = await models.Heater_ID.create({data: data}, {transaction: t})
                const tcType = await models.TC_Start_Manual_Control.create({fk_heater_iid: newData.iid}, {transaction: t})
                const telecommand = await models.TC_Type.create({kind: kind, fk_start_manual_control_iid: tcType.iid}, {transaction: t})
                return await models.TC_Type.findByPk(telecommand.iid, {transaction: t, include: {all: true, nested: true}})
            } else if (type === 'stop_manual_control') {
                const newData = await models.Heater_ID.create({data: data}, {transaction: t})
                const tcType = await models.TC_Stop_Manual_Control.create({fk_heater_iid: newData.iid}, {transaction: t})
                const telecommand = await models.TC_Type.create({kind: kind, fk_stop_manual_control_iid: tcType.iid}, {transaction: t})
                return await models.TC_Type.findByPk(telecommand.iid, {transaction: t, include: {all: true, nested: true}})
            } else if (type === 'control_experiment_heater') {
                const newData = await models.Heater_ID.create({data: data}, {transaction: t})
                const power = await models.Heater_Power_Type.create({data: data2}, {transaction: t})
                const tcType = await models.TC_Control_Experiment_Heater.create({fk_heater_iid: newData.iid, fk_heater_power_iid: power.iid}, {transaction: t})
                const telecommand = await models.TC_Type.create({kind: kind, fk_control_experiment_heater_iid: tcType.iid}, {transaction: t})
                return await models.TC_Type.findByPk(telecommand.iid, {transaction: t, include: {all: true, nested: true}})
            } else if (type === 'restart_device') {
                const newData = await models.Restartable_Device_ID.create({data: data}, {transaction: t})
                const tcType = await models.TC_Restart_Device.create({fk_device_id_iid: newData.iid}, {transaction: t})
                const telecommand = await models.TC_Type.create({kind: kind, fk_restart_device_iid: tcType.iid}, {transaction: t})
                return await models.TC_Type.findByPk(telecommand.iid, {transaction: t, include: {all: true, nested: true}})
            } else if (type === 'change_tm_mode') {
                const newData = await models.TMTC_Mode.create({data: data}, {transaction: t})
                const tcType = await models.TC_Change_TM_Mode.create({fk_new_mode_iid: newData.iid}, {transaction: t})
                const telecommand = await models.TC_Type.create({kind: kind, fk_change_tm_mode_iid: tcType.iid}, {transaction: t})
                return await models.TC_Type.findByPk(telecommand.iid, {transaction: t, include: {all: true, nested: true}})
            }
        })
        res.send(tc)
    } catch(error) {
        res.status(400).send({msg: error.message})
    }
})

router.delete('/telecommand/:id', authMiddleware, async (req, res, next) => {
    const id = parseInt(req.params.id)

    try{
        const tc = await db.transaction(async (t) => {
            let sent = await models.TC_Type_Sent.findAll({transaction: t})
            sent = sent.map(e => e.iid)
            if (sent.includes(id)) {
                return sent
            }
            await models.TC_Type.destroy({where: {iid: id}, transaction: t})
            return true
        })
        if (tc === true) {
            res.send({msg: 'Deleted TC', id: id})
        } else {
            res.status(400).send({msg: 'TC not deleted. Already sent', sentIds: tc})
        }
    } catch(error) {
        res.status(400).send({msg: error.message})
    }
})

router.get('/streaming', authMiddleware, async (req, res, next) => {
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive'
    })
    res.flushHeaders()
    res.write('retry: 10000\n\n')

    const client = new pg.Client({
        user: 'upmsat',
        host: '127.0.0.1',
        database: 'herccules',
        password: 'upmsat'
    })
    client.connect((err, client, done) => {
        if (err) {
            console.log("ERROR CONNECTING")
        } else {
            console.log("DATABASE CONNECTED")
            client.on('notification', data => {
                if (data.channel === 'new_sc_tm') {
                    const payload = JSON.parse(data.payload)
                    models.SC_TM_Type.findByPk(payload.iid, {include: {all: true, nested: true}})
                        .then(r =>  res.write(`data: ${JSON.stringify({type: 'sc', data: r})}\n\n`))
                        .catch(error => console.log(error))
                } else if (data.channel === 'new_hk_tm') {
                    const payload = JSON.parse(data.payload)
                    models.HK_TM_Type.findByPk(payload.iid, {include: {all: true, nested: true}})
                        .then(r => res.write(`data: ${JSON.stringify({type: 'hk', data: r})}\n\n`))
                        .catch(error => console.log(error))
                }
                console.log('ROW ADDED', data)
            })
            client.query('LISTEN new_sc_tm')
            client.query('LISTEN new_hk_tm')
        }
    })

    res.on('close', () => {
        res.end()
    })
})


module.exports = router;
