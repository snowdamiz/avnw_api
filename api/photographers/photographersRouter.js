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

// ----------------------
// GET PHOTOGRAPHER BY ID
// ----------------------
photographersRouter.get('/:id', async (req, res) => {
  let { id } = req.params;

  try {
    const photographer = await Photographer.findAll({ where: { id: id }});
    if (photographer) res.status(200).json(photographer)
    else res.status(404).json({ err: 'Photographer not found with this ID' })
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
});

// -----------------------
// EDIT PHOTOGRAPHER BY ID
// -----------------------
photographersRouter.put('/:id', restricted, async (req, res) => {
  let { id } = req.params;
  let { body } = req;

  try {
    const photographer = await Photographer.findAll({ where: { id: id }});
    if (photographer) {
      const editPhotographer = await Photographer.update(body, { where: { id: id }});
      if (editPhotographer) {
        const photographers = await Photographer.findAll();
        res.status(202).json(photographers);
      } else res.status(500).json({ err: 'Server Error, Could not update photographer' })
    } else res.status(404).json({ err: 'Photographer not found' })
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
});

// -------------------------
// DELETE PHOTOGRAPHER BY ID
// -------------------------
photographersRouter.put('/:id/delete', restricted, async (req, res) => {
  let { id } = req.params;

  try {
    const photographer = await Photographer.findAll({ where: { id: id }});
    if (photographer) {
      const deletedPhotographer = await Photographer.update({
        deletedAt: new Date()}, {
          where: { id: id }
      })
      if (deletedPhotographer) {
        const photographers = await Photographer.findAll();
        res.status(202).json(photographers)
      } else res.status(500).json({ err: 'Could not delete service' })
    } else res.status(404).json({ err: 'No user found'})
  } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })};
});

// --------------
// CREATE SERVICE
// --------------
photographersRouter.post('/', restricted, async (req, res) => {
  const { body } = req;

  if (body) {
    body.deletedAt = null;

    try {
      const photographer = await Photographer.create(body);
      if (photographer) {
        const photographers = await Photographer.findAll();
        res.status(201).json(photographers)
      } else res.status(406).json({ err: 'Server Error, service not accepted' })
    } catch (err) { res.status(500).json({ err: 'Internal Server Error', err })}
  } else res.status(406).json({ err: 'Missing reqest body', err })
});

module.exports = photographersRouter;