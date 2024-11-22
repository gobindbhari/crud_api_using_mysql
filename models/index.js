const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const sequelize = require('../config/connection');
const Temp = require('./tempModel');
const User = require('./userModel');


sequelize.sync({force:false})

User.belongsTo(Temp, {foreignKey:"id"})
Temp.hasMany(User,{foreignKey:"id"})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
