'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('serviceOrders', [
      {
        location: '23409 SW Reed Ave',
        comment: 'Comment goes here.',
        status: 'delivered',
        order_number: 1,
        createdAt: new Date(),
        user_id: 1,
        service_id: 1,
        photographer_id: 1,
      },
      {
        location: '23409 SW Reed Ave',
        comment: 'Comment goes here again.',
        status: 'ordered',
        order_number: 2,
        createdAt: new Date(),
        user_id: 1,
        service_id: 3,
        photographer_id: 2,
      },
      {
        location: '4989 NW Aspen Ave',
        comment: 'Comment goes here here.',
        status: 'delivered',
        order_number: 1,
        createdAt: new Date(),
        user_id: 2,
        service_id: 2,
        photographer_id: 2,
      },
      {
        location: '4989 NW Aspen Ave',
        comment: 'Comment goes here again here.',
        status: 'ordered',
        order_number: 2,
        createdAt: new Date(),
        user_id: 2,
        service_id: 3,
        photographer_id: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('serviceOrders', null, {});
  }
};
