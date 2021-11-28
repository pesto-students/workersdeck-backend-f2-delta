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

    servicable_pincode: DataTypes.CHAR(6),
    servicable_city: DataTypes.CHAR(20),
    category_id: DataTypes.INTEGER,
    subcategory_id: DataTypes.INTEGER,
    profile_pic: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkersProfile',
  });
  return WorkersProfile;
};