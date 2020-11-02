const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const { jwtKey, generateToken, protect } = require('../../auth/authenticate.js');
const DB = process.env.DB_URL;
const userRouter = express.Router();

const sequelize = new Sequelize(DB);

const User = sequelize.define('user', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    field: 'name',
    type: Sequelize.STRING,
  },
  email: {
    field: 'email',
    type: Sequelize.STRING
  },
  password: {
    field: 'password',
    type: Sequelize.STRING
  },
  phone: {
    field: 'phone',
    type: Sequelize.STRING
  },
  address: {
    field: 'address',
    type: Sequelize.STRING
  },
  city: {
    field: 'city',
    type: Sequelize.STRING
  },
  state: {
    field: 'state',
    type: Sequelize.STRING
  },
  zip: {
    field: 'zip',
    type: Sequelize.INTEGER
  },
  account_type: {
    field: 'account_type',
    type: Sequelize.STRING
  },
  createdAt: {
    field: 'createdAt',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deletedAt',
    type: Sequelize.DATE
  },
}, { timestamps: false })

// ----------------
// Get Current User
// ----------------
userRouter.get('/:id', protect, async (req, res) => {
  let id = req.params.id;

  try {
    const user = await User.findAll({ 
      where: { id: id }
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});
// -------------
// Register User
// -------------
userRouter.post('/register', async (req, res) => {
  const { body } = req;

  if (body) {
    const hash = bcrypt.hashSync(body.password, 10);
    body.password = hash;
    try {
      const newUser = await User.create({
        name: body.name,
        email: body.email,
        password: body.password,
        phone: body.phone,
        address: body.address,
        city: body.city,
        state: body.state,
        zip: body.zip,
        account_type: body.account_type,
        createdAt: new Date()
    });
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json({ err: 'Provide an email and password' });
  }
});

// ----------
// Login User
// ----------
userRouter.post('/login', async (req, res) => {
  const auth = req.body;

  if (auth) {
    const user = await User.findAll({
      where: { email: auth.email }
    });

    if (user && bcrypt.compareSync(auth.password, user[0].password)) {
      try {
        const token = await generateToken(user);
        res.status(200).json({ token, message: 'Logged In' })
      } catch (err) {
        res.status(401).json({ err: err })
      }
    } else {
      res.status(500).json({ err: 'Password incorrect' })
    }
  } else {
    res.status(500).json({ err: 'Provide an email and password' })
  }
});

module.exports = userRouter;