'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracking extends Model {
    static associate(models) {
      // define association here
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