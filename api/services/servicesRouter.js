const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const { generateToken, protect } = require('../../auth/authenticate.js');
const DB = process.env.DB_URL;
const servicesRouter = express.Router();

const sequelize = new Sequelize(DB);

const Service = sequelize.define('service', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    authToken: true,
  },
  product: {
    field: 'product',
    type: Sequelize.STRING
  },
  description: {
    field: 'description',
    type: Sequelize.TEXT,
  },
  price: {
    field: 'price',
    type: Sequelize.INTEGER
  },
  type: {
    field: 'type',
    type: Sequelize.STRING
  },
  createdAt: {
    field: 'createdAt',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deletedAt',
    type: Sequelize.DATE,
  }
}, { timestamps: false })

// ----------------
// GET ALL SERVICES
// ----------------
servicesRouter.get('/', async (req, res) => {
  try {
    const services = await Service.findAll();
    if (services) {
      res.status(200).json(services);
    } else {
      res.status(404).json({ err: 'No services found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error', err })
  }
});

// -----------------
// GET SERVICE BY ID
// -----------------
servicesRouter.get('/:id', async (req, res) => {
  let { id } = req.params;

  try {
    const service = await Service.findAll({ where: { id: id }});
    if (service) {
      res.status(200).json(service)
    } else {
      res.status(404).json({ err: 'No service found with this ID' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error', err })
  }
})

module.exports = servicesRouter;