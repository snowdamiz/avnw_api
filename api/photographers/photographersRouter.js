const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const db = require('./photographersHelper.js');
const photographersRouter = express.Router();

module.exports = photographersRouter;