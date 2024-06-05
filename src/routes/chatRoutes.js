const express = require('express');
const chatController = require('../controllers/chatController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/chatrooms', verifyToken, chatController.createChatRoom);
router.post('/joinroom', verifyToken, chatController.joinRoom);
router.post('/messages', verifyToken, chatController.sendMessage);

module.exports = router;
