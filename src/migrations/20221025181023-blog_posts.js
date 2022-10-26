'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      user_id: {
       type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdated: 'CASCADE',
        ondelete: 'CASCADE',
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
        },
        updated: {
        type: Sequelize.DATE,
        }
    }, {timestamps: false});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
