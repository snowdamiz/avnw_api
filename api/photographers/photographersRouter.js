const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const { generateToken, protect, restricted } = require('../../auth/authenticate.js');
const DB = process.env.DB_URL;
const photographersRouter = express.Router();

const sequelize = new Sequelize(DB);

const Photographer = sequelize.define('photographer', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    field: 'name',
    type: Sequelize.STRING
  },
  bio: {
    field: 'bio',
    type: Sequelize.TEXT
  },
  profile_image: {
    field: 'profile_image',
    type: Sequelize.STRING
  },
  insta_username: {
    field: 'insta_username',
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
}, { timestamps: false })

// ---------------------
// GET ALL PHOTOGRAPHERS
// ---------------------
photographersRouter.get('/', async (req, res) => {
  try {
    const photographers = await Photographer.findAll();
    if (photographers) res.status(200).json(photographers)
    else res.status(404).json({ err: 'No Photographers found' })
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
});

module.exports = photographersRouter;