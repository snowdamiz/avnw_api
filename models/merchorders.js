'use strict';
const { Sequelize } = require('sequelize');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchOrders extends Model {
    static associate(models) {
      merchOrders.associate = models => {
        merchOrders.belongsTo(models.users, {
          foreignKey: 'user_id',
        });
      }
    }
  };
  merchOrders.init({
    status: Sequelize.STRING,
    tracking: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    order_number: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    merch_id: Sequelize.INTEGER
  }, { sequelize, modelName: 'merchOrders' });
  return merchOrders;
};