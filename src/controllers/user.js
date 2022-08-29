const userService = require('../services/user');

const generateToken = require('../helpers/generateToken');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.create({ displayName, email, password, image });

  const token = generateToken(result.id);
  return res.status(201).json({ token });
};

const findAll = async (req, res) => {
  const users = await userService.findAll();

  return res.status(200).json(users);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const findUser = await userService.findByPk(id);

  if (!findUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(findUser);
};

module.exports = { create, findAll, findByPk };
