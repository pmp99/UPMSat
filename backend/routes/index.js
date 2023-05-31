const express = require('express');
const router = express.Router();
const client = require('../databases/cassandraClient')
const mysql = require('../databases/mysqlClient')
const {signupValidation, loginValidation} = require('./validation');
const {Op} = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require("express-validator");
const dayjs = require("dayjs");
const db = require('../testDatabase/db');
const initModels = require('../testDatabase/models/init-models')
const models = initModels(db)

const secretKey = 'BQuhVBupZGnKroT1lIMoo3YsdhEb05YWVMcn5rrSY5vqz5dH5ZTBpiQtZiziFkE'
const tokenExpiration = '24h'
const cookieMaxAge = 24*60*60*1000

const authMiddleware = (req, res, next) => {
    const theToken = req.cookies.authToken
    if (!theToken) {
        return res.status(422).json({msg: "Please provide the token"})
    } else {
        try {
            req.body.tokenData = jwt.verify(theToken, secretKey)
            next()
        } catch (error) {
            return res.status(400).send({msg: error.name})
        }
    }
}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'UPMSat'})
})

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


router.get('/api/tables', authMiddleware, (req, res, next) => {
    const query = 'DESCRIBE TABLES;';
    client.execute(query)
        .then(r => res.send(r.rows))
        .catch(e => {
            res.status(500).send({msg: e.message})
        })
})

router.get('/api/tables/:table', authMiddleware , (req, res, next) => {
    let {start, end} = req.query
    start = parseInt(start)
    end = parseInt(end)
    let query, params
    if (start && end) {
        query = `SELECT * FROM ${req.params.table} WHERE time_received >= ? and time_received <= ? ALLOW FILTERING`;
        params = [dayjs(start).format('YYYY-MM-DD hh:mm:ss'), dayjs(end).format('YYYY-MM-DD hh:mm:ss')]
    } else if (start) {
        query = `SELECT * FROM ${req.params.table} WHERE time_received >= ? ALLOW FILTERING`;
        params = [dayjs(start).format('YYYY-MM-DD hh:mm:ss')]
    } else if (end) {
        query = `SELECT * FROM ${req.params.table} WHERE time_received <= ? ALLOW FILTERING`;
        params = [dayjs(end).format('YYYY-MM-DD hh:mm:ss')]
    } else {
        query = `SELECT * FROM ${req.params.table}`;
        params = []
    }
    client.execute(query, params)
        .then(r => res.send({name: req.params.table, columns: r.columns, rows: r.rows}))
        .catch(e => {
            res.status(500).send({msg: e.message})
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
        req.dateWhere = {data: {[Op.between]: [start, end]}}
    }
    next()
}


router.get('/api/telemetry/:type', authMiddleware, dateIntervalMiddleware, (req, res, next) => {
    let type = req.params.type.toLowerCase()
    if (type !== 'hk' && type !== 'sc') {
        return res.status(400).send({msg: "Incorrect telemetry type"})
    }

    const scInclude = [
        {model: models.UINT32_Type, as: 'sequence_number'},
        {model: models.INT32_Type, as: 'timestamp_secs', where: req.dateWhere},
        {model: models.Balloon_Mode, as: 'balloon_mode'},
        {model: models.SC_TM_Type_payload, as: 'payload', include: [
            {model: models.HTL_SC_TM_Type, as: 'htl', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                    {model: models.INT16_Type, as: 'exp1_horizontal_heated_plate'},
                    {model: models.INT16_Type, as: 'exp2_vertical_heated_plate'},
                    {model: models.INT16_Type, as: 'exp3_horizontal_heated_plate'},
                    {model: models.INT16_Type, as: 'exp4_inner_vertical_plate_surface'},
                    {model: models.INT16_Type, as: 'exp4_intermediate_heated_plate_surface'},
                    {model: models.INT16_Type, as: 'exp4_exterior_plate_surface'},
                    {model: models.INT16_Type, as: 'exp1_air_cavity_intermediate_height'},
                    {model: models.INT16_Type, as: 'exp1_air_cavity_upper_height'},
                    {model: models.INT16_Type, as: 'exp2_air_cavity_intermediate_height'},
                    {model: models.INT16_Type, as: 'exp2_air_cavity_upper_height'},
                    {model: models.INT16_Type, as: 'exp3_air_cavity_intermediate_height'},
                    {model: models.INT16_Type, as: 'exp3_air_cavity_upper_height'},
                    {model: models.INT16_Type, as: 'exp4_air_cavity_small_intermediate_1'},
                    {model: models.INT16_Type, as: 'exp4_air_cavity_small_intermediate_2'},
                    {model: models.INT16_Type, as: 'exp4_air_cavity_big_intermediate_1'},
                    {model: models.INT16_Type, as: 'exp4_air_cavity_big_intermediate_2'},
                    {model: models.HTL_SC_TM_Type_heaters, as: 'heaters'}
            ]},
            {model: models.EL_SC_TM_Type, as: 'el', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                {model: models.INT16_Type, as: 'upwards_pyranometer'},
                {model: models.INT16_Type, as: 'upwards_pyrgeometer'},
                {model: models.INT16_Type, as: 'downwards_pyranometer'},
                {model: models.INT16_Type, as: 'downwards_pyrgeometer'},
                {model: models.EL_SC_TM_Type_dif_barometers, as: 'dif_barometers'}]},
            {model: models.NADS_SC_TM_Type, as: 'nads', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                {model: models.IMU_Sensors_Data, as: 'imu_sensors', include: [
                    {model: models.Axis_Data, as: 'acceleration', include: [{model: models.FLOAT32_Type, as: 'x'}, {model: models.FLOAT32_Type, as: 'y'}, {model: models.FLOAT32_Type, as: 'z'}]},
                        {model: models.Axis_Data, as: 'mag_field', include: [{model: models.FLOAT32_Type, as: 'x'}, {model: models.FLOAT32_Type, as: 'y'}, {model: models.FLOAT32_Type, as: 'z'}]},
                        {model: models.Axis_Data, as: 'angular_velocity', include: [{model: models.FLOAT32_Type, as: 'x'}, {model: models.FLOAT32_Type, as: 'y'}, {model: models.FLOAT32_Type, as: 'z'}]}]
                },
                {model: models.GPS_Data, as: 'gps', include: [
                    {model: models.INT32_Type, as: 'time_secs'},
                    {model: models.INT32_Type, as: 'time_nsecs'},
                    {model: models.FLOAT32_Type, as: 'latitude_deg'},
                    {model: models.FLOAT32_Type, as: 'longitude_deg'},
                    {model: models.FLOAT32_Type, as: 'altitude_m'},
                    {model: models.FLOAT32_Type, as: 'sog_knots'},
                    {model: models.FLOAT32_Type, as: 'cog_deg'}]
                }]
            },
            {model: models.ATL_SC_TM_Type, as: 'atl', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                {model: models.ATL_SC_TM_Type_photodiodes, as: 'photodiodes'}]
            }]
        }
    ]

    const hkInclude = [
        {model: models.UINT32_Type, as: 'sequence_number'},
        {model: models.INT32_Type, as: 'timestamp_secs', where: req.dateWhere},
        {model: models.Balloon_Mode, as: 'balloon_mode'},
        {model: models.HK_TM_Type_payload, as: 'payload', include: [
            {model: models.ATL_HK_TM_Type, as: 'atl_hk', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                {model: models.ATL_HK_TM_Type_temperatures, as: 'temperatures'}
            ]},
            {model: models.EL_HK_TM_Type, as: 'el_hk', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                {model: models.INT16_Type, as: 'upwards_pyranometer_temperature'},
                {model: models.INT16_Type, as: 'upwards_pyrgeometer_temperature'},
                {model: models.Switch_Status, as: 'upwards_heater_status'},
                {model: models.INT16_Type, as: 'downwards_pyranometer_temperature'},
                {model: models.INT16_Type, as: 'downwards_pyrgeometer_temperature'},
                {model: models.Switch_Status, as: 'downwards_heater_status'},
                {model: models.FLOAT32_Type, as: 'abs_pressure_mbar_1'},
                {model: models.FLOAT32_Type, as: 'abs_pressure_mbar_2'}]},
            {model: models.PCU_HK_TM_Type, as: 'pcu_hk', include: [
                {model: models.INT32_Type, as: 'snapshot_time_secs'},
                {model: models.INT8_Type, as: 'temperature'},
                {model: models.FLOAT32_Type, as: 'v_bat'},
                {model: models.FLOAT32_Type, as: 'a_bat'},
                {model: models.PCU_PS_Lines_Status, as: 'switches', include: [
                    {model: models.Switch_Status, as: 'al_line'},
                    {model: models.Switch_Status, as: 'tmu_line'},
                    {model: models.Switch_Status, as: 'sdpu_line'}]
                }]
            }]
        }
    ]

    if (type === 'sc') {
        models.SC_TM_Type.findAll({include: scInclude})
            .then(r => res.send(r))
            .catch(error => res.status(400).send({msg: error.message}))
    } else {
        models.HK_TM_Type.findAll({include: hkInclude})
            .then(r => res.send(r))
            .catch(error => res.status(400).send({msg: error.message}))
    }
})

router.get('/api/telecommand', authMiddleware, (req, res, next) => {
    const tcInclude = [
        {model: models.TC_Change_Balloon_Mode, as: 'change_balloon_mode', include: [{model: models.Balloon_Mode, as: 'new_mode'}]},
        {model: models.TC_Control_Experiment_Heater, as: 'control_experiment_heater', include: [{model: models.Heater_ID, as: 'heater'}, {model: models.Heater_Power_Type, as: 'heater_power'}]},
        {model: models.TC_Start_Manual_Control, as: 'start_manual_control', include: [{model: models.Heater_ID, as: 'heater'}]},
        {model: models.TC_Stop_Manual_Control, as: 'stop_manual_control', include: [{model: models.Heater_ID, as: 'heater'}]},
        {model: models.TC_Change_TM_Mode, as: 'change_tm_mode', include: [{model: models.TMTC_Mode, as: 'new_mode'}]},
        {model: models.TC_Restart_Device, as: 'restart_device', include: [{model: models.Restartable_Device_ID, as: 'device_id'}]}
    ]

    models.TC_Type.findAll({include: tcInclude})
        .then(r => res.send(r))
        .catch(error => res.status(400).send({msg: error.message}))
})

router.post('/api/telecommand/edit/:id', authMiddleware, async (req, res, next) => {
    const tcInclude = [
        {model: models.TC_Change_Balloon_Mode, as: 'change_balloon_mode', include: [{model: models.Balloon_Mode, as: 'new_mode'}]},
        {model: models.TC_Control_Experiment_Heater, as: 'control_experiment_heater', include: [{model: models.Heater_ID, as: 'heater'}, {model: models.Heater_Power_Type, as: 'heater_power'}]},
        {model: models.TC_Start_Manual_Control, as: 'start_manual_control', include: [{model: models.Heater_ID, as: 'heater'}]},
        {model: models.TC_Stop_Manual_Control, as: 'stop_manual_control', include: [{model: models.Heater_ID, as: 'heater'}]},
        {model: models.TC_Change_TM_Mode, as: 'change_tm_mode', include: [{model: models.TMTC_Mode, as: 'new_mode'}]},
        {model: models.TC_Restart_Device, as: 'restart_device', include: [{model: models.Restartable_Device_ID, as: 'device_id'}]}
    ]

    const id = parseInt(req.params.id)

    try{
        const tc = await db.transaction(async (t) => {
            const currentTC = await models.TC_Type.findByPk(id, {include: tcInclude, transaction: t})

            if (currentTC?.kind !== req.body.newTC?.kind) {
                await models.TC_Type.update({kind: req.body.newTC?.kind}, {
                    where: {iid: currentTC?.iid}, transaction: t
                })
            }
            if (currentTC?.change_balloon_mode?.new_mode?.data !== req.body.newTC?.change_balloon_mode?.new_mode?.data) {
                await models.Balloon_Mode.update({data: req.body.newTC?.change_balloon_mode?.new_mode?.data}, {
                    where: {iid: currentTC?.change_balloon_mode?.new_mode?.iid}, transaction: t
                })
            }
            if (currentTC?.control_experiment_heater?.heater_power?.data !== req.body.newTC?.control_experiment_heater?.heater_power?.data) {
                await models.Heater_Power_Type.update({data: req.body.newTC?.control_experiment_heater?.heater_power?.data}, {
                    where: {iid: currentTC?.control_experiment_heater?.heater_power?.iid}, transaction: t
                })
            }
            if (currentTC?.control_experiment_heater?.heater?.data !== req.body.newTC?.control_experiment_heater?.heater?.data) {
                await models.Heater_ID.update({data: req.body.newTC?.control_experiment_heater?.heater?.data}, {
                    where: {iid: currentTC?.control_experiment_heater?.heater?.iid}, transaction: t
                })
            }
            if (currentTC?.start_manual_control?.heater?.data !== req.body.newTC?.start_manual_control?.heater?.data) {
                await models.Heater_ID.update({data: req.body.newTC?.start_manual_control?.heater?.data}, {
                    where: {iid: currentTC?.start_manual_control?.heater?.iid}, transaction: t
                })
            }
            if (currentTC?.stop_manual_control?.heater?.data !== req.body.newTC?.stop_manual_control?.heater?.data) {
                await models.Heater_ID.update({data: req.body.newTC?.stop_manual_control?.heater?.data}, {
                    where: {iid: currentTC?.stop_manual_control?.heater?.iid}, transaction: t
                })
            }
            if (currentTC?.change_tm_mode?.new_mode?.data !== req.body.newTC?.change_tm_mode?.new_mode?.data) {
                await models.TMTC_Mode.update({data: req.body.newTC?.change_tm_mode?.new_mode?.data}, {
                    where: {iid: currentTC?.change_tm_mode?.new_mode?.iid}, transaction: t
                })
            }
            if (currentTC?.restart_device?.device_id?.data !== req.body.newTC?.restart_device?.device_id?.data) {
                await models.Restartable_Device_ID.update({data: req.body.newTC?.restart_device?.device_id?.data}, {
                    where: {iid: currentTC?.restart_device?.device_id?.iid}, transaction: t
                })
            }
            return await models.TC_Type.findByPk(id, {include: tcInclude, transaction: t})
        })
        res.send(tc)
    } catch(error) {
        res.status(400).send({msg: error.message})
    }
})


module.exports = router;
