const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

const logInfo = (message) => {
  logger.info(message);
};

const logError = (message) => {
  logger.error(message);
};

module.exports = {
  logInfo,
  logError
};
