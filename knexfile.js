// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg', // 'pg' is the Knex client for PostgreSQL
    connection: {
      host: 'dpg-cs022blds78s738e9umg-a', // Hostname from your screenshot
      port: 5432, // Default PostgreSQL port
      user: 'dev_mrjb_user', // Username from your screenshot
      password: 'aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF', // Password from your screenshot
      database: 'dev_mrjb', // Database name from your screenshot
    },
    migrations: {
      directory: './back-end/src/db/migrations', // Folder for migrations
    },
    seeds: {
      directory: './back-end/src/db/seeds', // Folder for seed files
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
