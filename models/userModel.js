const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');


const User = sequelize.define(     // format .define(modelName, attributes, options)
    'User',     //  modelName

    {           //  Model attributes define here

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        email:{
            type : DataTypes.STRING
        }
    },
    {
        // Other model options go here 
        tableName: 'users'    // Providing the table name directly
    }
);


module.exports = User