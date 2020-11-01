'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('serviceOrders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_id_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
    .then( _ => queryInterface.addConstraint('serviceOrders', {
      fields: ['service_id'],
      type: 'foreign key',
      name: 'service_id_fk',
      references: {
        table: 'services',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
    .then( _ => queryInterface.addConstraint('serviceOrders', {
      fields: ['photographer_id'],
      type: 'foreign key',
      name: 'photographer_id_fk',
      references: {
        table: 'photographers',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('serviceOrders');
  }
};
