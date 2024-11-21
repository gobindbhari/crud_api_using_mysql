const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const sequelize = require('../config/connection');
const Temp = require('./tempModel');
const User = require('./userModel');


dotenv.config()

sequelize.sync({force:true}).then(() => {
    console.log("Db synced")
}).catch((e) => {
    console.log(e)
})
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
