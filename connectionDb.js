const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '54.81.81.83',
    user: 'adminputty',
    password: 'putty',
    database: 'supervalues'
})

module.exports = connection;