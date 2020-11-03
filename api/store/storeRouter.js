const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const { generateToken, protect, restricted } = require('../../auth/authenticate.js');
const DB = process.env.DB_URL;
const storeRouter = express.Router();

const sequelize = new Sequelize(DB, {
  define: { freezeTableName: true}
});

const Merch = sequelize.define('merch', {
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
  createdAt: {
    field: 'createdAt',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deletedAt',
    type: Sequelize.DATE
  }
}, { timestamps: false });

// ----------------
// GET ALL PRODUCTS
// ----------------
storeRouter.get('/', async (req, res) => {
  try {
    const products = await Merch.findAll({ where: { deletedAt: null }});
    if (products) res.status(200).json(products)
    else res.status(404).json({ err: 'No products found' })
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
});

module.exports = storeRouter;