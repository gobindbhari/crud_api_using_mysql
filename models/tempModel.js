const { Sequelize ,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const sequelize = require("./index")


const Temp =  sequelize.define(
    'Temp',
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        tableName: 'Temp'
    }
);


module.exports = Temp;
