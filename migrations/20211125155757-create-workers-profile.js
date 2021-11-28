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
      servicable_pincode: {
        type: Sequelize.CHAR(6),
        allowNull: false,
      },
      servicable_city:{
        type: Sequelize.CHAR(20),
        defaultValue: "Pune",
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
      availablity: {
        type: Sequelize.CHAR(1),
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      uid: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WorkersProfiles');
  }
};