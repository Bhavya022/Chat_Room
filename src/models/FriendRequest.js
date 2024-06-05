const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FriendRequest = sequelize.define('FriendRequest', {
  userId: {
    type: DataTypes.STRING
  },
  friendUserId: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    defaultValue: 'pending'
  }
});

module.exports = FriendRequest;
