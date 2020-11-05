'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('merchOrders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_id_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then( _ => queryInterface.addConstraint('merchOrders', {
      fields: ['merch_id'],
      type: 'foreign key',
      name: 'merch_id_fk',
      references: {
        table: 'merch',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchOrders');
  }
};
