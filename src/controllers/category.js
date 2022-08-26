const categoryService = require('../services/category');

const create = async (req, res) => {
  const { name } = req.body;

  await categoryService.create(name);

  return res.status(201).json(name);
};

const findAll = async (req, res) => {
  const users = await userService.findAll();

  return res.status(200).json(users);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const findUser = await userService.findByPk(id);

  return res.status(200).json(findUser);
};

module.exports = { create, findAll, findByPk };
