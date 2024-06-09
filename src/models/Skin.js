const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Skin = sequelize.define('Skin', {
   userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: 'Users',
         key: 'id'
      }
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   isPublished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
   }
});

Skin.belongsTo(User, { foreignKey: 'userId' });

module.exports = Skin;
