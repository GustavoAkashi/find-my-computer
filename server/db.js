const Pool = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '112345',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = pool;