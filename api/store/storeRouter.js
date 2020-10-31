const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const storeRouter = express.Router();

storeRouter.get('/', (req, res) => {
  res.send('store');
});

module.exports = storeRouter;