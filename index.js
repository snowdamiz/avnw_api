const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const APP_URL = process.env.APP_URL || 'http://localhost:3000';

const helmet = require('helmet');
const morgan = require('morgan');

const userRouter = require('./api/users/usersRouter.js');
const servicesRouter = require('./api/services/servicesRouter.js');
const photographersRouter = require('./api/photographers/photographersRouter.js');
const storeRouter = require('./api/store/storeRouter.js');

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
  morgan('common')
);

// Routes
app.use('/user', userRouter);
app.use('/services', servicesRouter);
app.use('/photographers', photographersRouter);
app.use('/store', storeRouter);

// Only listen when test mode disabled
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`)); 
}

module.exports = app;