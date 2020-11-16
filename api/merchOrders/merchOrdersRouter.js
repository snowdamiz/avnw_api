const express = require('express');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const { restricted } = require('../../auth/authenticate.js');
const MerchOrder = require('../../models/merchorders.js');

const merchOrdersRouter = express.Router();

// --------------------
// GET ALL MERCH ORDERS
// --------------------
merchOrdersRouter.get('/', restricted, async (req, res) => {
  try {
    const orders = await MerchOrder.findAll({ where: { deletedAt: null }});
    if (orders) res.status(200).json(orders)
    else res.status(404).json({ err: 'No orders found' })
  } catch (err) { res.status(500).json({ err: 'Internal server error', err })}
});

// ---------------------
// GET MERCH ORDER BY ID
// ---------------------
merchOrdersRouter.get('/:id', restricted, async (req, res) => {
  let { id } = req.params;

  try {
    const order = await MerchOrder.findAll({ where: { id: id, deletedAt: null }})
    if (order) res.status(200).json(order)
    else res.status(404).json({ err: 'No order found with this ID' })
  } catch (err) { res.status(500).json({ err: 'Internal server error', err })}
});

// -----------------------
// EDIT MERCH ORDERY BY ID
// -----------------------
merchOrdersRouter.put('/:id/edit', restricted, async (req, res) => {

});

// ------------------------
// DELETE MERCH ORDER BY ID
// ------------------------
merchOrdersRouter.put('/:id/delete', restricted, async (req, res) => {

});

module.exports = merchOrdersRouter;
;