const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Skin = require('./Skin');

const SharedSkin = sequelize.define('SharedSkin', {
   skinId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: 'Skins',
         key: 'id'
      }
   },
   userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: 'Users',
         key: 'id'
      }
   }
});

SharedSkin.belongsTo(User, { foreignKey: 'userId' });
SharedSkin.belongsTo(Skin, { foreignKey: 'skinId' });

module.exports = SharedSkin;
