const jwt = require('jsonwebtoken');

const loginService = require('../services/login');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '1d' };

const login = async (req, res) => {
  const { email, password } = req.body;

  await loginService(email, password);

  const token = jwt.sign({ email }, JWT_SECRET, JWT_CONFIG);
  return res.status(200).json({ token });
};

module.exports = { login };
