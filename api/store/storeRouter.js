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

// -----------------
// GET PRODUCT BY ID
// -----------------
storeRouter.get('/:id', async (req, res) => {
  let { id } = req.params;

  try {
    const product = await Merch.findAll({ where: { id: id }});
    if (product) res.status(200).json(product)
    else res.status(404).json({ err: 'No product found with this ID' })
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
});

// ------------------
// EDIT PRODUCT BY ID
// ------------------
storeRouter.put('/:id', restricted, async (req, res) => {
  let { id } = req.params;
  let { body } = req;

  try {
    const product = await Merch.findAll({ where: { id: id }});
    if (product) {
      const editProduct = await Merch.update(body, { where: { id: id }});
      if (editProduct) {
        const producta = await Merch.findAll();
        res.status(202).json(producta);
      } else res.status(500).json({ err: 'Server Error, Could not update product' })
    } else res.status(404).json({ err: 'Product not found' })
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
});

module.exports = storeRouter;