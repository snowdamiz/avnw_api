'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photographers extends Model {
    static associate(models) {
      // define association here
    }
  };
  photographers.init({
    name: Sequelize.STRING,
    bio: Sequelize.TEXT,
    profile_image: Sequelize.STRING,
    insta_username: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  }, { sequelize, modelName: 'photographers' });
  return photographers;
};