const { User } = require('../database/models');

const create = async (name) => {
  const newCategory = await User.create(name);
    
  return newCategory;
};

const findAll = async () => {
  const categories = await User.findAll();
  return categories;
};

module.exports = { create, findAll };
