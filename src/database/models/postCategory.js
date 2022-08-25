const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true }
  });
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        through: PostCategory,
        otherKey: 'categoryId',
        as: 'categories'
      });
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        through: PostCategory,
        otherKey: 'postId',
        as: 'posts'
      });
    };
  
    return PostCategory;
};

module.exports = PostCategory;
