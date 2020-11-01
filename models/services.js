'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    static associate(models) {
      // define association here
    }
  };
  services.init({
    product: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    type: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  }, { sequelize, modelName: 'services'});
  return services;
};