const { DataTypes } = require("sequelize");
const db_connect = require("../config/database");


const model_admin = db_connect.define('admin', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
});

model_admin.sync().then(() => {
    console.log('Admin Table synced successfully')
});

module.exports = model_admin;
