'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'title',
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'content',
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'userId',
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      image: {
        type: Sequelize.INTEGER,
        field: 'image',
      },
      published: {
        type: Sequelize.DATE,
        field: 'published',
      },
      updated: {
        type: Sequelize.DATE,
        field: 'updated',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
