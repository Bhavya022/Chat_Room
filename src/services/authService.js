const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/env');

async function register(userData) {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({ ...userData, password: hashedPassword });
  return user;
}

async function login(userId, password) {
  const user = await User.findOne({ where: { userId } });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ userId: user.userId }, JWT_SECRET);
  return token;
}

module.exports = { register, login };
