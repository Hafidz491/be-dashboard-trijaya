'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.Item, { foreignKey: 'instansiId', as: 'items' });
    }
  }
  Project.init(
    {
      instansiName: DataTypes.STRING,
      projectNumber: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      isFinished: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );

  return Project;
};