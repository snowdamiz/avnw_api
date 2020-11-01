'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tracking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      route: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entry_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      exit_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tracking');
  }
};