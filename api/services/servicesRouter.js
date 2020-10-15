const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const db = require('./servicesHelper.js');
const servicesRouter = express.Router();

module.exports = servicesRouter;