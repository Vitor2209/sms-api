const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sms = sequelize.define('Sms',{
  phone_number:{
    type:DataTypes.STRING,
    allowNull:false
  },
  message:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    allowNull:true
  }
});

module.exports = Sms;
