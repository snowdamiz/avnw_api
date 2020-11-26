'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merch', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image3: {
        allowNull: true,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merch');
  }
};