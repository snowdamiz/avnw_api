'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.associate = models => {
        users.hasMany(models.tracking, {
          foreignKey: {
            name: 'user_id',
            allowNull: false,
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      }
    }
  };
  users.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.INTEGER,
    account_type: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  }, { equelize, modelName: 'users' });
  return users;
};