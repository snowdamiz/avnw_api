'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracking extends Model {
    static associate(models) {
      tracking.associate = models => {
        tracking.belongsTo(models.users);
      }
    }
  };
  tracking.init({
    route: Sequelize.STRING,
    entry_time: Sequelize.DATE,
    exit_time: Sequelize.DATE,
    user_id: Sequelize.INTEGER
  }, { sequelize, modelName: 'tracking' });
  return tracking;
};