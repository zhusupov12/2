const Poole = require('pg').Pool;
const pole = new Poole({
    user: 'aset',
    host: 'localhost',
    database: 'api',
    password: 'Aset',
    port: 5432
})

module.exports = pool;