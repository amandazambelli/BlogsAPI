const { User } = require('../database/models');

const verifyName = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;

  const validEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;

  if (!validEmail.test(email)) {
    return res
      .status(400)
      .json({ message: '"email" must be a valid email' });
  }

  const userEmail = await User.findOne({
    where: { email },
  });

  if (userEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = { verifyName, verifyPassword, verifyEmail };
