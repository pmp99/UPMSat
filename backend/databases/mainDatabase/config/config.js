module.exports = {
    development: {
        dialect: 'postgres',
        database: process.env.MYSQL_DB_NAME || 'herccules',
        username: process.env.MYSQL_DB_USERNAME || 'upmsat',
        password: process.env.MYSQL_DB_PASSWORD || 'upmsat',
        host: process.env.MYSQL_DB_HOST || '127.0.0.1',
        port: parseInt(process.env.MYSQL_DB_PORT || '5432')
    },
    test: {
        dialect: 'postgres',
        database: process.env.MYSQL_DB_NAME || 'herccules',
        username: process.env.MYSQL_DB_USERNAME || 'upmsat',
        password: process.env.MYSQL_DB_PASSWORD || 'upmsat',
        host: process.env.MYSQL_DB_HOST || '127.0.0.1',
        port: parseInt(process.env.MYSQL_DB_PORT || '5432')
    },
    production: {
        dialect: 'postgres',
        database: process.env.MYSQL_DB_NAME,
        username: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        host: process.env.MYSQL_DB_HOST,
        port: parseInt(process.env.MYSQL_DB_PORT)
    }
}