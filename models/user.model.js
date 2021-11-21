module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      uid:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile_no: {
        type: Sequelize.STRING,
        allowNull: false
      },

    });
  
    return User;
  };