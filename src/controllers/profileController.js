const ProfileService = require('../services/profileService');
const { logError } = require('../utils/loggerUtils');

exports.getProfile = async (req, res) => {
  try {
    const profile = await ProfileService.getProfile(req.params.userId);
    res.status(200).json(profile);
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updatedProfile = await ProfileService.updateProfile(req.params.userId, req.body);
    res.status(200).json({ message: 'Profile updated successfully', updatedProfile });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};
