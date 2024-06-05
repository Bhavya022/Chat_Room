const AuthService = require('../services/authService');
const { logError } = require('../utils/loggerUtils');

exports.register = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const token = await AuthService.login(userId, password);
    res.status(200).json({ token });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};
