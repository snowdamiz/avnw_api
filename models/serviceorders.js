'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviceOrders extends Model {
    static associate(models) {
      // define association here
    }
  };
  serviceOrders.init({
    location: DataTypes.STRING,
    comment: DataTypes.STRING,
    status: DataTypes.STRING,
    order_number: Sequelize.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    user_id: DataTypes.INSERT,
    service_id: DataTypes.INSERT,
    photographer_id: DataTypes.INSERT
  }, { sequelize, modelName: 'serviceOrders' });
  return serviceOrders;
};