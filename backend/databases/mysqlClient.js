const mysql = require("mysql2");

const connection = mysql.createPool({
    connectionLimit : 100,
    host: '127.0.0.1',
    user: 'upmsat2',
    password: 'upmsat2',
    database: 'users'
});

module.exports = connection;