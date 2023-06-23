'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Project, { foreignKey: 'instansiId' });
    }
  }
  Item.init(
    { 
      instansiId: DataTypes.INTEGER,
      itemName: DataTypes.STRING,
      itemVolume: DataTypes.INTEGER,
      itemUnit: DataTypes.STRING,
      price: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );

  return Item;
};
