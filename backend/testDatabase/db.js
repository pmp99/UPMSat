const {Sequelize} = require('sequelize');
const configs = require('./config/config.js');

const env = process.env.NODE_ENV || 'development'
const config = configs[env]

const db = new Sequelize({
    ...config,
    logging: false
})

module.exports = db;