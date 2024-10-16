require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg', // PostgreSQL client
    connection: 'postgresql://dev_mrjb_user:aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF@dpg-cs022blds78s738e9umg-a.ohio-postgres.render.com/dev_mrjb?ssl=true',
    migrations: {
      directory: './back-end/src/db/migrations', // Path to migrations
    },
    seeds: {
      directory: './back-end/src/db/seeds', // Path to seeds
    },
  },

  staging: {
    client: 'pg', // Use 'pg' for PostgreSQL consistency
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg', // Use 'pg' for PostgreSQL consistency
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};