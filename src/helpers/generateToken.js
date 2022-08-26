const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '1d' };

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, JWT_SECRET, JWT_CONFIG);

  return token;
};

module.exports = generateToken;