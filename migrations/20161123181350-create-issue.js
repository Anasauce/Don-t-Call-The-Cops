'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Issues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone_wrong: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      zip_wrong: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      type_wrong: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      is_active: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Issues');
  }
};
