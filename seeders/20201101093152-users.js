'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Bob',
        email: 'bob@gmail.com',
        password: 'bob',
        phone: '5033333333',
        address: '1293 SE Road Rd',
        city: 'Portland',
        state: 'OR',
        zip: 97364,
        account_type: 'admin',
        createdAt: new Date(),
      },
      {
        name: 'Sam',
        email: 'sam@gmail.com',
        password: 'sam',
        phone: '5032332233',
        address: '94874 SE Road Rd',
        city: 'Seattle',
        state: 'WA',
        zip: 98376,
        account_type: 'user',
        createdAt: new Date(),
      },
      {
        name: 'Joe',
        email: 'joe@gmail.com',
        password: 'joe',
        phone: '5033332342',
        address: '13223 SE Road Rd',
        city: 'Beaverton',
        state: 'OR',
        zip: 97344,
        account_type: 'user',
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
