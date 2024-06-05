module.exports = {
    secretKey: process.env.SECRET_KEY || 'Abhiman', 
    database: process.env.DB_NAME || 'secure_chat_room',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'bhavya22',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql', 
    JWT_SECRET:process.env.JWT_SECRET||'Abhiman'
  };
  