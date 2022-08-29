const { Category } = require('../database/models');

const create = async (name) => {
  console.log('name no service', name);
  const newCategory = await Category.create({ name });
    
  return newCategory;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { create, findAll };
