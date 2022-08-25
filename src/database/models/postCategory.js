const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true }
  });
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'id',
        as: 'postId'
      });
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'id',
        as: 'categoryId'
      });
    };
  
    return PostCategory;
};

module.exports = PostCategory;
