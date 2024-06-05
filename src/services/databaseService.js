const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');
const User = require('../models/User');
const ChatRoom = require('../models/ChatRoom');
const Message = require('../models/Message');
const FriendRequest = require('../models/FriendRequest');
const ChatRoomMember = require('../models/ChatRoomMember');

class DatabaseService {
  async initializeDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      
      // Sync all models
      await sequelize.sync({ force: true });
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async seedDatabase() {
    try {
      const users = [
        { userId: 'user1', deviceId: 'device1', name: 'User One', phone: '1234567890', availCoins: 100, password: 'password1' },
        { userId: 'user2', deviceId: 'device2', name: 'User Two', phone: '0987654321', availCoins: 200, password: 'password2' }
      ];

      for (const userData of users) {
        const hashedPassword = bcrypt.hashSync(userData.password, 8);
        await User.create({ ...userData, password: hashedPassword });
      }

      console.log('Database seeded.');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  }

  async runInTransaction(transactionCallback) {
    const transaction = await sequelize.transaction();
    try {
      await transactionCallback(transaction);
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = new DatabaseService();
