const categoryService = require('../services/category');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const newCategory = await categoryService.create(name);

  return res.status(201).json(newCategory);
};

const findAll = async (req, res) => {
  const categories = await categoryService.findAll();

  return res.status(200).json(categories);
};

module.exports = { create, findAll };
