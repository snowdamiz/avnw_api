'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('services', [
      {
        id: 1,
        product: 'Family Photoshoot',
        description: 'Family photoshoot. One location up to 1 hour.',
        price: 40,
        type: 'service',
        createdAt: new Date(),
      },
      {
        id: 2,
        product: 'Mini RDM Shoot',
        description: 'Up to 10 photos. Must be on Sunday before, or during RDM',
        price: 40,
        type: 'service',
        createdAt: new Date(),
      },
      {
        id: 3,
        product: 'Wedding / Engagement Shoot',
        description: 'Up to 30 photos.',
        price: 40,
        type: 'service',
        createdAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('services', null, {});
  }
};
