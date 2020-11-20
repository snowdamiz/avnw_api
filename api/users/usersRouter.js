const express = require('express');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const { generateToken, protect, restricted } = require('../../auth/authenticate.js');
const bodyParser = require('body-parser');
const stripe = require("stripe")("sk_test_Ed9d8T76puISLXcu5AOeYzaJ00cfGDICBA");
const { v4: uuidv4 } = require('uuid');

const userRouter = express.Router();

const User = require('../../models/users.js');
const MerchOrder = require('../../models/merchorders.js');
const ServiceOrder = require('../../models/serviceorders.js');
const Merch = require('../../models/merch.js');
const Service = require('../../models/services.js');
const Photographer = require('../../models/photographers.js');

User.hasMany(MerchOrder, { foreignKey: 'user_id' });
MerchOrder.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(ServiceOrder, { foreignKey: 'user_id' });
ServiceOrder.belongsTo(User, { foreignKey: 'user_id' });

Merch.hasMany(MerchOrder, { foreignKey: 'merch_id' });
MerchOrder.belongsTo(Merch, { foreignKey: 'merch_id' });

Service.hasMany(ServiceOrder, { foreignKey: 'service_id' });
ServiceOrder.belongsTo(Service, { foreignKey: 'service_id' });

Photographer.hasMany(ServiceOrder, { foreignKey: 'photographer_id' });
ServiceOrder.belongsTo(Photographer, { foreignKey: 'photographer_id' });

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
    body.account_type = 'admin';

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
      if (editUser) {
        const newUser = await User.findAll({ where: { id: id }})
        res.status(202).json(newUser)
      } else res.status(500).json({ err: 'Server error, user not able to be updated' })
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

// ---------------------
// GET USER MERCH ORDERS
// ---------------------
userRouter.get('/:id/merch-orders', protect, async (req, res) => {
  let { id } = req.params;
  
  try {
    const orders = await MerchOrder.findAll({
      where: { user_id: id },
      include: [Merch]
    });
    if (orders) res.status(200).json(orders);
    else res.status(404).json({ err: 'No Orders to Show' })
  } catch (err) { res.status(500).json({ error: 'Internal Server Error', err }) }
});

// --------------------
// POST NEW MERCH ORDER
// --------------------
userRouter.post('/:id/merch-orders', protect, async (req, res) => {
  const { body } = req;

  if (body) {
    try {
      const order = await MerchOrder.create(body);
      if (order) {
        res.status(201).json(order);
      } else res.status(406).json({ err: 'Server error, order not accepted' })
    } catch (err) { res.status(500).json({ err: 'Internal server error', err })}
  } else res.status(406).json({ err: 'Missing request body' })
})

// -----------------------
// GET USER SERVICE ORDERS
// -----------------------
userRouter.get('/:id/service-orders', protect, async (req, res) => {
  let { id } = req.params;
  
  try {
    const orders = await ServiceOrder.findAll({
      where: { user_id: id },
      include: [Service, Photographer]
    });
    if (orders) res.status(200).json(orders);
    else res.status(404).json({ err: 'No Orders to Show' })
  } catch (err) { res.status(500).json({ error: 'Internal Server Error', err }) }
});

// ----------------------
// POST NEW SERVICE ORDER
// ----------------------
userRouter.post('/:id/service-orders', protect, async (req, res) => {
  const { body } = req;

  if (body) {
    try {
      const order = await ServiceOrder.create(body);
      if (order) {
        res.status(201).json(order);
      } else  res.status(406).json({ err: 'Server error, order not accepted' })
    } catch (err) { res.status(500).json({ err: 'Internal server error', err }) }
  } else res.status(406).json({ err: 'Missing request body' })
})

// -------
// PAYMENT
// -------
userRouter.post('/:id/pay', protect, async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { token } = body.authToken;
  const { card } = token;

  console.log('here');

  try {
      const customer = await stripe.customers.create({
          email: body.user.email,
          source: token.id
      });

      // console.log(bodbody.user.email);
      console.log(token.id);

      const idempotencyKey = v4();
      const charge = await stripe.charges.create({
          amount: body.total * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Pruchase`,
      }, { idempotencyKey });

      if (charge) {
        res.status(202).json(charge);
        console.log(charge);
      } else res.status(500).json({ err: 'Could not process payment' });
  } catch (err) { res.status(500).json({ err: 'Internal server error', err })};
})

module.exports = userRouter;