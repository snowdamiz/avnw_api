const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const { generateToken, protect } = require('../../auth/authenticate.js');
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
  let { id } = req.params;

  try {
    const user = await User.findAll({ where: { id: id, deletedAt: null }});
    if (user) res.status(200).json(user)
    else res.status(404).json({ err: 'No user found with this ID' })
  } catch (err) { res.status(500).json({ error: 'Internal Server Error', err })}
});
// -------------
// Register User
// -------------
userRouter.post('/register', async (req, res) => {
  const { body } = req;

  if (body) {
    const hash = bcrypt.hashSync(body.password, 10);
    body.password = hash;
    body.account_type = 'user';

    try {
      const user = await User.create(body);
      if (user) {
        const token = generateToken(user);
        res.status(200).json({ token, user }); 
      } else res.status(500).json({ err: 'Unable to create user' })
    } catch (err) { res.status(500).json(err)}
  } else res.status(500).json({ err: 'Provide an email and password' });
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

    if (user.deletedAt !== null) {
      if (user.length > 0 && bcrypt.compareSync(auth.password, user[0].password)) {
        try {
          const token = await generateToken(user[0]);
          res.status(200).json({ token, user, message: 'Logged In' })
        } catch (err) { res.status(401).json({ err: err }) }
      } else res.status(500).json({ err: 'Password incorrect' })
    } else res.status(403).json({ err: 'User has been deleted' })
  } else res.status(500).json({ err: 'Provide an email and password' })
});

// --------------
// Edit User Info
// --------------
userRouter.put('/:id', protect, async (req, res) => {
  let id = req.params.id;
  let edit = req.body;

  try {
    const getUser = await User.findAll({ where: { id: id }});
    if (getUser) {
      const editUser = await User.update(edit, { where: { id: id }})
      res.status(202).json(editUser)
    } else res.status(404).json({ err: 'User Does not Exist' })
  } catch (err) { res.status(500).json({ err: err })}
});

// -----------
// DELETE USER
// -----------
userRouter.put('/:id/delete', protect, async (req, res) => {
  let { id } = req.params;

  try {
    const getUser = await User.findAll({ where: { id: id }});
    if (getUser) {
      const deletedUser = await User.update({
        deletedAt: new Date()}, {
        where: { id: id }
      })
      res.status(202).json(deletedUser);
    } else res.status(404).json({ err: 'User not found' })
  } catch (err) { res.status(500).json({ err: err })};
});

module.exports = userRouter;