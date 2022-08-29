const { BlogPost } = require('../database/models');

const create = async ({ title, content, categoryIds }) => {
  const newUser = await BlogPost.create({ title, content, categoryIds });
    
  return newUser;
};

const findAll = async () => {
  const posts = await BlogPost.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return posts;
};

const findByPk = async (id) => {
  const findPost = await BlogPost.findByPk(id, { attributes: { exclude: ['password'] } });
  return findPost;
};

module.exports = { create, findAll, findByPk };
