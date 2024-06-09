'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const db = {};

const sequelize = require('../config/database');

db.User = require('./User');
db.Skin = require('./Skin');
db.SharedSkin = require('./SharedSkin');

db.User.hasMany(db.Skin, { foreignKey: 'userId' });
db.User.hasMany(db.SharedSkin, { foreignKey: 'userId' });
db.Skin.belongsTo(db.User, { foreignKey: 'userId' });
db.Skin.hasMany(db.SharedSkin, { foreignKey: 'skinId' });
db.SharedSkin.belongsTo(db.User, { foreignKey: 'userId' });
db.SharedSkin.belongsTo(db.Skin, { foreignKey: 'skinId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
