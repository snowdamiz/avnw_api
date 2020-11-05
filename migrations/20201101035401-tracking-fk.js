'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('tracking', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_id_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tracking');
  }
};
