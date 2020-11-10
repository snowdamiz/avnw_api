require('dotenv').config();
const Sequelize = require('sequelize');
const DB = process.env.DB_URL;
const sequelize = new Sequelize(DB);

module.exports = sequelize.define('merchOrders', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  status: {
    field: 'status',
    type: Sequelize.STRING,
  },
  tracking: {
    field: 'tracking',
    type: Sequelize.STRING
  },
  order_number: {
    field: 'order_number',
    type: Sequelize.INTEGER,
  },
  quantity: {
    field: 'quantity',
    type: Sequelize.INTEGER
  },
  user_id: {
    field: 'user_id',
    type: Sequelize.INTEGER
  },
  merch_id: {
    field: 'merch_id',
    type: Sequelize.INTEGER
  },
}, { timestamps: false })