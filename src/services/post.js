const { Op } = require('sequelize');

const {
  BlogPost, Category, PostCategory,
  User, sequelize,
} = require('../database/models');

const create = async ({ title, content, categoryIds }, userId) => {
  const checkCategory = await Category.findAll({ where: { id: categoryIds } });

  if (checkCategory.length !== categoryIds.length) return false;

  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create(
        { title, content, categoryIds, userId },
        { transaction: t },
      );

      const createCategories = checkCategory.map(
        (cat) => ({ postId: newPost.id, categoryId: cat.id }),
      );

      await PostCategory.bulkCreate(createCategories, { transaction: t });

      return newPost;
    });

    return result;
  } catch (e) {
    console.log(e.message);
  }
};

const findAll = async () => {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] },
  );
  return posts;
};

const findByPk = async (id) => {
  const findPost = await BlogPost.findByPk(id,
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

  return findPost;
};

const update = async ({ title, content }, id) => {
  await BlogPost.update({ title, content }, { where: { id } });

  const editedPost = await BlogPost.findByPk(id,
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

  return editedPost;
};

const destroy = async (id) => {
  const post = await BlogPost.destroy({ where: { userId: id } });

  return post;
};

const search = async (searchTerm) => {
  if (searchTerm === '') {
    const getAll = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    return getAll;
  }

  const query = `%${searchTerm}%`;
  const searchResult = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
      where: { [Op.or]: { title: { [Op.like]: query }, content: { [Op.like]: query } } } },
  );

  return searchResult;
};

module.exports = { create, findAll, findByPk, update, destroy, search };
