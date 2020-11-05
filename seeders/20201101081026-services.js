'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('services', [
      {
        product: 'Family Photoshoot',
        description: 'Family photoshoot. One location up to 1 hour.',
        price: 40,
        type: 'service',
        quantity: 1,
        createdAt: new Date(),
      },
      {
        product: 'Mini RDM Shoot',
        description: 'Up to 10 photos. Must be on Sunday before, or during RDM',
        price: 40,
        type: 'service',
        quantity: 1,
        createdAt: new Date(),
      },
      {
        product: 'Wedding / Engagement Shoot',
        description: 'Up to 30 photos.',
        price: 40,
        type: 'service',
        quantity: 1,
        createdAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('services', null, {});
  }
};
