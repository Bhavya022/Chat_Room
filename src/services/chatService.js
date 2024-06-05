const ChatRoom = require('../models/ChatRoom');
const Message = require('../models/Message');
const ChatRoomMember = require('../models/ChatRoomMember');

async function createChatRoom(chatRoomData) {
  const chatRoom = await ChatRoom.create(chatRoomData);
  return chatRoom;
}

async function sendMessage(messageData) {
  const message = await Message.create(messageData);
  return message;
}

async function getMessages(chatRoomId) {
  const messages = await Message.findAll({ where: { roomId: chatRoomId } });
  return messages;
}

async function joinRoom(data) {
  const { roomId, userId } = data;
  const chatRoom = await ChatRoom.findByPk(roomId);
  if (!chatRoom) {
    throw new Error('Chat room not found');
  }
  const existingMember = await ChatRoomMember.findOne({
    where: { roomId, userId }
  });
  if (existingMember) {
    throw new Error('User is already a member of the chat room');
  }
  await ChatRoomMember.create({ roomId, userId });
  return { success: true };
}

module.exports = { createChatRoom, sendMessage, getMessages, joinRoom };
