const socketIo = require('socket.io');
const http = require('http');

const startWebSocketServer = () => {
  const server = http.createServer();
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (data) => {
      console.log('Message received:', data);
      io.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  const PORT = process.env.PORT || 3001;
  server.listen(PORT, () => {
    console.log(`WebSocket server listening on port ${PORT}`);
  });
};

module.exports = { startWebSocketServer };
