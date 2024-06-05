const { Sequelize } = require('sequelize');
const { database, username, password, host, dialect } = require('./env');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false, // Disable logging; default: console.log
});

module.exports = sequelize;
