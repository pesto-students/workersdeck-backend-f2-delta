'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkersProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  WorkersProfile.init({
    pincode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkersProfile',
  });
  return WorkersProfile;
};