'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WorkersProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceable_pincode: {
        type: Sequelize.CHAR(4),
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: 'categories', key: 'id' }
      },
      subcategory_id: {
        type: Sequelize.INTEGER,
        references: { model: 'categories', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WorkersProfiles');
  }
};