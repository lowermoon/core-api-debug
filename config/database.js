const sequelize = require('sequelize');
// const mysql2 = require('mysql2');
require('dotenv').config();

// const host = `34.101.71.233`;

const db_connect = new sequelize('db_skillshift', 'ziyadzk', '', {
    host: '34.101.71.233',
    port: 3306, 
    dialect: 'mysql'
});

module.exports = db_connect;