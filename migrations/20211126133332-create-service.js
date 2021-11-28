'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service_name: {
        type: Sequelize.STRING
      },
      service_charge: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      service_description: {
        type: Sequelize.STRING,
      },
      start_time: {
        type: Sequelize.TIME,
        //
      },
      close_time: {
        type: Sequelize.TIME,
      },
      estimate_time: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      subcategory_id: {
        type: Sequelize.INTEGER
      },
      servicable_city_id: {
        type: Sequelize.INTEGER
      },
      servicable_pincode : {
        type: Sequelize.CHAR(6),
        allowNull: true,
      },
      wid : {
        type: Sequelize.INTEGER,
        references: { model: 'WorkersProfiles', key: 'id' }
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
    await queryInterface.dropTable('Services');
  }
};