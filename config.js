const fs = require('fs');
require('dotenv').config();

module.exports = {
  development: {
    url: 'postgresql://postgres:hacked123@localhost:5432/avnw',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    }
  },
  test: {
    url: 'postgres://rtkksliv:7mL8Wl-BQDIoWxVmuPmbX7IL9QAKX2nA@lallah.db.elephantsql.com:5432/rtkksliv',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    }
  },
  production: {
    username: process.env.DB_UNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    }
  }
};