require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/avnw.sqlite3'
    },
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './data/avnw.sqlite3'
    },
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: { directory: __dirname + './data/migrations' },
    seeds: { directory: __dirname +  './data/seeds' },
  },
};