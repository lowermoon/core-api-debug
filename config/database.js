const sequelize = require('sequelize');
const mysql2 = require('mysql2');

const db_connect = new sequelize('db_skillshift', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db_connect;