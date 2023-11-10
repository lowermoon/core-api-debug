const sequelize = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

const host = `34.101.71.233` || 'localhost';

const db_connect = new sequelize('db_skillshift', 'root', '', {
    host: host,
    port: 3308,
    dialect: 'mysql'
});

module.exports = db_connect;