const { Sequelize ,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const sequelize = require("./index")


const Temp =  sequelize.define(
    'Temp',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        tableName: 'Temp'
    }
);


module.exports = Temp;
