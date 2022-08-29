const sequelize = require('sequelize');

const { BlogPost, Category, PostCategory, User } = require('../database/models');

const create = async ({ title, content, categoryIds }, userId) => {
  const categories = await Category.findAll();
  const checkCategory = categories.filter((category) => categoryIds.includes(category.id));
  
  const t = await sequelize.transaction();

  try {
    const newPost = await BlogPost.create(
      { title, content, categoryIds, userId },
      { transaction: t },
    );

    const createCategories = checkCategory.map(
      (cat) => ({ postId: newPost.id, categoryId: cat.id }),
    );

    await PostCategory.bulkCreate(createCategories, { transaction: t });

    await t.commit();

    return newPost;
  } catch (e) {
    await t.rollback();
    console.log(e.message);
  }
};

const findAll = async () => {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } },
    ] },
  );
  return posts;
};

const findByPk = async (id) => {
  const findPost = await BlogPost.findByPk(id,
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } },
    ] });
    
  return findPost;
};

module.exports = { create, findAll, findByPk };
