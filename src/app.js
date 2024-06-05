const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const profileRoutes = require('./routes/profileRoutes');
const { startWebSocketServer } = require('./websocket'); // Import the startWebSocketServer function
const { initializeDatabase } = require('./services/databaseService'); // Import the initializeDatabase function

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/',(req,res)=>{
  res.send('Welcome to Chat Room')
})
app.use('/api/auth', authRoutes);
app.use('/api', chatRoutes);
app.use('/api', profileRoutes);

startWebSocketServer(); // Start the WebSocket server

initializeDatabase(); // Initialize the database

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
