const express = require('express');
const profileController = require('../controllers/profileController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/profile/:userId', verifyToken, profileController.getProfile);
router.put('/profile/:userId', verifyToken, profileController.updateProfile);

module.exports = router;
