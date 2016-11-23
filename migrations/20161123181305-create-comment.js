'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      response_time: {
        allowNull: false,
        type: Sequelize.STRING
      },
      use_again: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      helpful: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      comment_text: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      resource_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Resources',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Comments');
  }
};
