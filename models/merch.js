'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merch extends Model {
    static associate(models) {
      // define association here
    }
  };
  merch.init({
    product: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    type: Sequelize.STRING,
    category: Sequelize.STRING,
    image: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  }, { sequelize, modelName: 'merch' });
  return merch;
};