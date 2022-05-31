const mysql = require("mysql");
var Modem = require('docker-modem');
var modem1 = new Modem({protocol: 'http', host:'127.0.0.1', port:'3000'});

const connection = mysql.createPool({
    host: 'db',
    port: 'modem1',
    user: 'admin',
    password: 'supersecret',
    database: 'groupomania'
});

module.exports = connection;