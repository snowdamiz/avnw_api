'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('merch', [
      {
        product: "AV White and Blue Hat",
        description: "AV Hat with a White and Blue design",
        price: 10,
        type: 'merch',
        category: "Decals",
        image1: 'https://i.ibb.co/34D3s9m/item-2.jpg',
        image2: 'https://i.ibb.co/34D3s9m/item-2.jpg',
        image3: 'https://i.ibb.co/34D3s9m/item-2.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "AV Sweatshirt Round Back",
        description: "Sweatshirt with a round AVNW logo on the back",
        price: 40,
        type: 'merch',
        category: "Sweatshirts",
        image1: 'https://i.ibb.co/6PHyrpp/item-3.jpg',
        image2: 'https://i.ibb.co/6PHyrpp/item-3.jpg',
        image3: 'https://i.ibb.co/6PHyrpp/item-3.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "AVNW Shirt Round Back",
        description: "Shirt with a round AVNW logo on the back",
        price: 60,
        type: 'merch',
        category: "Shirt",
        image1: 'https://i.ibb.co/DGVfDn4/item-4.jpg',
        image2: 'https://i.ibb.co/DGVfDn4/item-4.jpg',
        image3: 'https://i.ibb.co/DGVfDn4/item-4.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "Shirt Square Back Colored",
        description: "Shirt with a AVNW on the back",
        price: 40,
        type: 'merch',
        category: "Shirt",
        image1: 'https://i.ibb.co/6vw6MmB/item-5.jpg',
        image2: 'https://i.ibb.co/6vw6MmB/item-5.jpg',
        image3: 'https://i.ibb.co/6vw6MmB/item-5.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "AV Sweatshirt Black and White",
        description: "Sweatshirt with a AVNW logo on the back",
        price: 20,
        type: 'merch',
        category: "Sweatshirt",
        image1: 'https://i.ibb.co/0K6DC2s/item-6.jpg',
        image2: 'https://i.ibb.co/0K6DC2s/item-6.jpg',
        image3: 'https://i.ibb.co/0K6DC2s/item-6.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "PX Sweatshirt Square Back Red and White",
        description: "Sweatshirt with a PX on the back",
        price: 20,
        type: 'merch',
        category: "Sweatshirt",
        image1: 'https://i.ibb.co/CwX6jm3/item-7.jpg',
        image2: 'https://i.ibb.co/CwX6jm3/item-7.jpg',
        image3: 'https://i.ibb.co/CwX6jm3/item-7.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "PX Red and White Hat",
        description: "Sweatshirt with a AVNW on the back",
        price: 20,
        type: 'merch',
        category: "Hat",
        image1: 'https://i.ibb.co/FJNVJ4g/item-8.jpg',
        image2: 'https://i.ibb.co/FJNVJ4g/item-8.jpg',
        image3: 'https://i.ibb.co/FJNVJ4g/item-8.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "PX shirt Red and White",
        description: "Shirt with a PX logo on the back",
        price: 20,
        type: 'merch',
        category: "Shirt",
        image1: 'https://i.ibb.co/vDgqdwH/item-9.jpg',
        image2: 'https://i.ibb.co/vDgqdwH/item-9.jpg',
        image3: 'https://i.ibb.co/vDgqdwH/item-9.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "AVNW shirt round back White and Blue",
        description: "Shirt with a AVNW logo on the back",
        price: 20,
        type: 'merch',
        category: "Shirt",
        image1: 'https://i.ibb.co/ZhCbxsL/item-10.jpg',
        image2: 'https://i.ibb.co/ZhCbxsL/item-10.jpg',
        image3: 'https://i.ibb.co/ZhCbxsL/item-10.jpg',
        quantity: 1,
        createdAt: new Date()
      },
      {
        product: "Shirt Round Back Black and White",
        description: "Shirt with a round AVNW log on the back",
        price: 20,
        type: 'merch',
        category: "Photos",
        image1: 'https://i.ibb.co/SVDdfh0/item-1.jpg',
        image2: 'https://i.ibb.co/SVDdfh0/item-1.jpg',
        image3: 'https://i.ibb.co/SVDdfh0/item-1.jpg',
        quantity: 1,
        createdAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('merch', null, {});
  }
};
