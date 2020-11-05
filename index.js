const express = require('express');
const Sequelize = require('sequelize');

const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const APP_URL = process.env.APP_URL || 'http://localhost:5000';
const DB = process.env.DB_URL;

const helmet = require('helmet');
const morgan = require('morgan');

const userRouter = require('./api/users/usersRouter.js');
const servicesRouter = require('./api/services/servicesRouter.js');
const photographersRouter = require('./api/photographers/photographersRouter.js');
const storeRouter = require('./api/store/storeRouter.js');
const trackingRouter = require('./api/tracking/trackingRouter.js');

// Cors Init
const corsOptions = {
  origin: APP_URL,
  optionsSuccessStatus: 200
};

const app = express();

// Server Init
app.use(
  express.json(),
  cors(corsOptions),
  helmet(),
  morgan('dev')
);

// Routes
app.use('/user', userRouter);
app.use('/services', servicesRouter);
app.use('/photographers', photographersRouter);
app.use('/store', storeRouter);
app.use('/tracking', trackingRouter);

// Only listen when test mode disabled
// if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`)); 
// }

module.exports = app;