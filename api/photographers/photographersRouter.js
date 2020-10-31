const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const photographersRouter = express.Router();

photographersRouter.get('/', (req, res) => {
  res.send('photographers');
});

module.exports = photographersRouter;