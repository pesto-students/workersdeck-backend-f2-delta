'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile_no: DataTypes.CHAR(10),
    verification_key : DataTypes.STRING,
    role : DataTypes.CHAR(1),
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};