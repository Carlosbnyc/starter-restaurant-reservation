require('dotenv').config();
const path = require("path");

// Logging environment variables for debugging
console.log("Environment Variables Loaded:");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("DATABASE_URL_DEVELOPMENT:", process.env.DATABASE_URL_DEVELOPMENT);
console.log("DATABASE_URL_TEST:", process.env.DATABASE_URL_TEST);
console.log("DATABASE_URL_PREVIEW:", process.env.DATABASE_URL_PREVIEW);
console.log("LOG_LEVEL:", process.env.LOG_LEVEL);

const {
  DATABASE_URL = "postgresql://dev_mrjb_user:aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF@dpg-cs022blds78s738e9umg-a.ohio-postgres.render.com/dev_mrjb?ssl=true",
  DATABASE_URL_DEVELOPMENT = "postgresql://dev_mrjb_user:aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF@dpg-cs022blds78s738e9umg-a.ohio-postgres.render.com/dev_mrjb?ssl=true",
  DATABASE_URL_TEST = "postgresql://dev_mrjb_user:aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF@dpg-cs022blds78s738e9umg-a.ohio-postgres.render.com/dev_mrjb?ssl=true",
  DATABASE_URL_PREVIEW = "postgresql://dev_mrjb_user:aMAAUYERxeBNnje9MHfF0pU0YPWp8gQF@dpg-cs022blds78s738e9umg-a.ohio-postgres.render.com/dev_mrjb?ssl=true",
  DEBUG,
} = process.env

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};