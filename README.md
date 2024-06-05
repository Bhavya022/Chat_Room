# Chat_Room
# Chat Room Application

This is a chat room application built with Node.js, Express, Sequelize, and Socket.io. It allows users to create accounts, join chat rooms, send messages, and more.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [WebSocket Events](#websocket-events)

## Features

- User authentication (register, login)
- Create and join chat rooms
- Send and receive messages in real-time
- Profile management
- Friend requests

## Technologies

- Node.js
- Express
- Sequelize
- Socket.io
- JWT for authentication
- Bcrypt for password hashing

## Setup

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/chat-room.git
   cd chat-room
   Install dependencies

sh
Copy code
npm install
Create a .env file in the root directory and add the necessary environment variables (see Environment Variables).

Run the application

sh
Copy code
node src/app.js
Environment Variables
Create a .env file in the root of your project and configure the following environment variables:

env
Copy code
PORT=3000
WS_PORT=3001
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
Usage
To use the application, you can interact with the API endpoints using tools like Postman or Thunder Client. Ensure you include the necessary authentication tokens where required.

API Endpoints
Auth Routes
Register a new user

Endpoint: POST /api/auth/register
Body:
json
Copy code
{
  "deviceId": "device1",
  "name": "User One",
  "phone": "1234567890",
  "password": "password1"
}
Login

Endpoint: POST /api/auth/login
Body:
json
Copy code
{
  "phone": "1234567890",
  "password": "password1"
}
Chat Routes
Create a chat room

Endpoint: POST /api/chatrooms
Headers: Authorization: Bearer <token>
Body:
json
Copy code
{
  "name": "Room Name",
  "description": "Room Description"
}
Join a chat room

Endpoint: POST /api/joinroom
Headers: Authorization: Bearer <token>
Body:
json
Copy code
{
  "roomId": "room1"
}
Send a message

Endpoint: POST /api/messages
Headers: Authorization: Bearer <token>
Body:
json
Copy code
{
  "roomId": "room1",
  "message": "Hello, world!"
}
Profile Routes
Get user profile

Endpoint: GET /api/profile/:userId
Headers: Authorization: Bearer <token>
Update user profile

Endpoint: PUT /api/profile/:userId
Headers: Authorization: Bearer <token>
Body:
json
Copy code
{
  "name": "New Name",
  "phone": "0987654321"
}
WebSocket Events
Connection

Triggered when a user connects to the WebSocket server.
Message

Triggered when a user sends a message.
Payload:
json
Copy code
{
  "roomId": "room1",
  "message": "Hello, world!"
}
Disconnection

Triggered when a user disconnects from the WebSocket server.
