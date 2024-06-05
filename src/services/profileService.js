const User = require('../models/User');

class ProfileService {
  async getProfile(userId) {
    const user = await User.findOne({ where: { userId } });
    if (!user) throw new Error('User not found');
    return user;
  }

  async updateProfile(userId, profileData) {
    const user = await User.findOne({ where: { userId } });
    if (!user) throw new Error('User not found');
    
    await user.update(profileData);
    return user;
  }
}

module.exports = new ProfileService();
