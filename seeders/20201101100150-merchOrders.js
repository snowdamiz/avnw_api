'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('merchOrders', [
      {
        status: 'delivered',
        tracking: 'DFOLIJSDSD098DFG96DF69',
        quantity: 1,
        payment_token: '1',
        user_id: 1,
        merch_id: 1,
        createdAt: new Date(),
      },
      {
        status: 'delivered',
        tracking: 'SDFGSDFG0987SDF09GS9DF8',
        quantity: 1,
        payment_token: '2',
        user_id: 1,
        merch_id: 2,
        createdAt: new Date(),
      },
      {
        status: 'ordered',
        tracking: '986FGHJ987DGFHJ98DSFDGH',
        quantity: 1,
        payment_token: '3',
        user_id: 1,
        merch_id: 6,
        createdAt: new Date(),
      },
      {
        status: 'ordered',
        tracking: 'SD684SD9F1S9D8FG19SD998',
        quantity: 1,
        payment_token: '4',
        user_id: 1,
        merch_id: 4,
        createdAt: new Date(),
      },
      {
        status: 'delivered',
        tracking: '2SD9SDFGSDFGSD9F8G2S9DF',
        quantity: 1,
        payment_token: '5',
        user_id: 2,
        merch_id: 2,
        createdAt: new Date(),
      },
      {
        status: 'ordered',
        tracking: 'SDAF982SD1F9G2SDF9GDFG8',
        quantity: 1,
        payment_token: '6',
        user_id: 2,
        merch_id: 3,
        createdAt: new Date(),
      },
      {
        status: 'ordered',
        tracking: 'YUI1Y9UI29YU2982D9F2DF6',
        quantity: 1,
        payment_token: '7',
        user_id: 2,
        merch_id: 8,
        createdAt: new Date(),
      },
      {
        status: 'delivered',
        tracking: 'SDFS29SD8F2G9D2FB99S99S',
        quantity: 1,
        payment_token: '8',
        user_id: 3,
        merch_id: 3,
        createdAt: new Date(),
      },
      {
        status: 'delivered',
        tracking: 'YUOMYUIMTYUI89O49MTY98Y',
        quantity: 1,
        payment_token: '9',
        user_id: 3,
        merch_id: 4,
        createdAt: new Date(),
      },
      {
        status: 'delivered',
        tracking: 'Q984D9F49S49GFHK98A4SD8',
        quantity: 1,
        payment_token: '10',
        user_id: 3,
        merch_id: 6,
        createdAt: new Date(),
      },
      {
        status: 'ordered',
        tracking: 'DC1D89HG19RST819SX4984C',
        quantity: 1,
        payment_token: '11',
        user_id: 3,
        merch_id: 10,
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('merchOrders', null, {});
  }
};
