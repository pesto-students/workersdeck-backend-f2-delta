'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Booking.init({
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    worker_id: DataTypes.INTEGER,
    address_id:DataTypes.INTEGER,
    booking_amount: DataTypes.DECIMAL(10, 2),
    booking_time: DataTypes.TIME,
    booking_date: DataTypes.DATEONLY,
    metadata: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};