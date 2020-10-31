const fs = require('fs');

module.exports = {
  development: {
    url: 'postgresql://postgres:hacked123@localhost:5432/avnw',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    }
  },
  test: {
    username: process.env.DB_UNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
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