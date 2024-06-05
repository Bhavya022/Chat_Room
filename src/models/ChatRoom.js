const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ChatRoom = sequelize.define('ChatRoom', {
  roomName: {
    type: DataTypes.STRING
  },
  createdBy: {
    type: DataTypes.STRING
  }
});

module.exports = ChatRoom;
