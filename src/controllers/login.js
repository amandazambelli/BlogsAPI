const loginService = require('../services/login');

const generateToken = require('../helpers/generateToken');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService(email, password);

  const token = generateToken(user.id);
  return res.status(200).json({ token });
};

module.exports = { login };
