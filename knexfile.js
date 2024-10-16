// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg', 
    connection: {
      host: 'dpg-cs022blds78s738e9umg-a',
      port: 5432, 
      user: 'dev_mrjb_user', 
      password: 'aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF', 
      database: 'dev_mrjb',
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
