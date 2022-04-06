'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    carrer: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    companyWork: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    twitter: DataTypes.STRING,
    facebook: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    professionalEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};