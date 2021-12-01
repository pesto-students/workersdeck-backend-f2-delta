'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      },
      service_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      worker_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      address_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      booking_time:{
        allowNull: false,
        type: Sequelize.TIME,
      },
      booking_date:{
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      booking_status:{
        allowNull: false,
        type:Sequelize.ENUM(['pending','completed','cancelled','rejected']),
        defaultValue:'pending'
      },
      booking_amount:{
        type: Sequelize.DECIMAL(10, 2),
        defaultValue:0
      },
      metadata: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:'',
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};