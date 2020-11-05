const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const trackingRouter = express.Router();

trackingRouter.get('/', (req, res) => {
  res.send('tracking');
});

module.exports = trackingRouter;