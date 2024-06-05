const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Message = sequelize.define('Message', {
  roomId: {
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.TEXT
  }
});

module.exports = Message;
