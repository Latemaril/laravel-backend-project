'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SharedSkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SharedSkin.belongsTo(models.User, { foreignKey: 'userId' });
      SharedSkin.belongsTo(models.Skin, { foreignKey: 'skinId' });
    }
  }
  SharedSkin.init({
    skinId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SharedSkin',
  });
  return SharedSkin;
};