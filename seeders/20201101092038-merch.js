'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('merch', [
      {
        id: 1,
        product: "AV White and Blue Hat",
        description: "AV Hat with a White and Blue design",
        price: 10,
        type: 'merch',
        category: "Decals",
        image: 'https://i.ibb.co/34D3s9m/item-2.jpg',
        createdAt: new Date()
      },
      {
        id: 2,
        product: "AV Sweatshirt Round Back",
        description: "Sweatshirt with a round AVNW logo on the back",
        price: 40,
        type: 'merch',
        category: "Sweatshirts",
        image: 'https://i.ibb.co/6PHyrpp/item-3.jpg',
        createdAt: new Date()
      },
      {
        id: 3,
        product: "AVNW Shirt Round Back",
        description: "Shirt with a round AVNW logo on the back",
        price: 60,
        type: 'merch',
        category: "Shirt",
        image: 'https://i.ibb.co/34D3s9m/item-4.jpg',
        createdAt: new Date()
      },
      {
        id: 4,
        product: "Shirt Square Back Colored",
        description: "Shirt with a AVNW on the back",
        price: 40,
        type: 'merch',
        category: "Shirt",
        image: 'https://i.ibb.co/34D3s9m/item-5.jpg',
        createdAt: new Date()
      },
      {
        id: 5,
        product: "AV Sweatshirt Black and White",
        description: "Sweatshirt with a AVNW logo on the back",
        price: 20,
        type: 'merch',
        category: "Sweatshirt",
        image: 'https://i.ibb.co/34D3s9m/item-6.jpg',
        createdAt: new Date()
      },
      {
        id: 6,
        product: "PX Sweatshirt Square Back Red and White",
        description: "Sweatshirt with a PX on the back",
        price: 20,
        type: 'merch',
        category: "Sweatshirt",
        image: 'https://i.ibb.co/34D3s9m/item-7.jpg',
        createdAt: new Date()
      },
      {
        id: 7,
        product: "PX Red and White Hat",
        description: "Sweatshirt with a AVNW on the back",
        price: 20,
        type: 'merch',
        category: "Hat",
        image: 'https://i.ibb.co/34D3s9m/item-8.jpg',
        createdAt: new Date()
      },
      {
        id: 8,
        product: "PX shirt Red and White",
        description: "Shirt with a PX logo on the back",
        price: 20,
        type: 'merch',
        category: "Shirt",
        image: 'https://i.ibb.co/34D3s9m/item-9.jpg',
        createdAt: new Date()
      },
      {
        id: 9,
        product: "AVNW shirt round back White and Blue",
        description: "Shirt with a AVNW logo on the back",
        price: 20,
        type: 'merch',
        category: "Shirt",
        image: 'https://i.ibb.co/34D3s9m/item-10.jpg',
        createdAt: new Date()
      },
      {
        id: 10,
        product: "Shirt Round Back Black and White",
        description: "Shirt with a round AVNW log on the back",
        price: 20,
        type: 'merch',
        category: "Photos",
        image: 'https://i.ibb.co/34D3s9m/item-1.jpg',
        createdAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('merch', null, {});
  }
};
