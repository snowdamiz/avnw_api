require('dotenv').config();
const Sequelize = require('sequelize');
const DB = process.env.DB_URL;
const sequelize = new Sequelize(DB, {
  define: { freezeTableName: true}
});

module.exports = sequelize.define('merch', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  product: {
    field: 'product',
    type: Sequelize.STRING
  },
  description: {
    field: 'description',
    type: Sequelize.STRING
  },
  price: {
    field: 'price',
    type: Sequelize.INTEGER
  },
  type: {
    field: 'type',
    type: Sequelize.STRING
  },
  category: {
    field: 'category',
    type: Sequelize.STRING
  },
  image: {
    field: 'image',
    type: Sequelize.STRING
  },
  quantity: {
    field: 'quantity',
    type: Sequelize.INTEGER
  },
  createdAt: {
    field: 'createdAt',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deletedAt',
    type: Sequelize.DATE
  }
}, { timestamps: false });