const Pool = require('pg').Pool;

const connection = new Pool({
    host: '127.0.0.1',
    user: 'upmsat',
    password: 'upmsat',
    database: 'user'
});

module.exports = connection;