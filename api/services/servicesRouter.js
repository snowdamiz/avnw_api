const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const servicesRouter = express.Router();

servicesRouter.get('/', (req, res) => {
  res.send('services');
});

module.exports = servicesRouter;