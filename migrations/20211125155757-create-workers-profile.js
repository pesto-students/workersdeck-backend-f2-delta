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
        type: Sequelize.CHAR(6),
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subcategory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      profile_pic: {
        type: Sequelize.STRING,
        defaultValue: 'http://lorempixel.com/400/200/sports/Dummy-Text/'
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