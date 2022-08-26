const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, SECRET);
    const user = await User.findOne({ where: { email: payload.email } });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = verifyToken;
