const ChatService = require('../services/chatService');
const { logError } = require('../utils/loggerUtils');

exports.createChatRoom = async (req, res) => {
  try {
    const chatRoom = await ChatService.createChatRoom(req.body);
    res.status(201).json({ message: 'Chat room created successfully', chatRoom });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const message = await ChatService.sendMessage(req.body);
    res.status(200).json({ message: 'Message sent successfully', message });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.joinRoom = async (req, res) => {
  try {
    // Implement logic to join a user to a chat room
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: 'Server error', error });
  }
};
