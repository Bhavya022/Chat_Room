const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  deviceId: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  availCoins: {
    type: DataTypes.INTEGER
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isPrime: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
