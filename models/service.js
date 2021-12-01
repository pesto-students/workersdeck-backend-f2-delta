'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Service.init({
    service_name: DataTypes.STRING,
    service_charge: DataTypes.DECIMAL(10, 2),
    service_description: DataTypes.STRING,
    start_time: DataTypes.TIME,
    close_time: DataTypes.TIME,
    estimate_time: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    subcategory_id: DataTypes.INTEGER,
    servicable_city_id: DataTypes.INTEGER,
    servicable_pincode : DataTypes.CHAR,
    wid: DataTypes.INTEGER,
    status:DataTypes.CHAR(1),

  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};