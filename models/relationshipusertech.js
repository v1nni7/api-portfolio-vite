'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class relationshipUserTech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  relationshipUserTech.init({
    user_id: DataTypes.INTEGER,
    tech1: DataTypes.STRING,
    tech2: DataTypes.STRING,
    tech3: DataTypes.STRING,
    tech4: DataTypes.STRING,
    tech5: DataTypes.STRING,
    tech6: DataTypes.STRING,
    tech7: DataTypes.STRING,
    tech8: DataTypes.STRING,
    tech9: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'relationshipUserTech',
  });
  return relationshipUserTech;
};