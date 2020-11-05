'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tracking', [
      {
        route: 'Index',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 1,
      },
      {
        route: 'Store',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 1,
      },
      {
        route: 'Cart',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 1,
      },
      {
        route: 'Index',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 2,
      },
      {
        route: 'BookingStepOne',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 2,
      },
      {
        route: 'BookingStepTwo',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 2,
      },
      {
        route: 'BookingStepThree',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 2,
      },
      {
        route: 'Index',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 3,
      },
      {
        route: 'Store',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 3,
      },
      {
        route: 'BookingStepOne',
        entry_time: new Date(),
        exit_time: new Date(),
        user_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tracking', null, {});
  }
};
