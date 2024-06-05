const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ChatRoomMember = sequelize.define('ChatRoomMember', {
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = ChatRoomMember;
