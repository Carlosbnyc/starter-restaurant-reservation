const tables = require("./01-tables.json");

exports.seed = function(knex) {
  return knex("tables")
    .del()  // Deletes all existing entries
    .then(function () {
      return knex("tables").insert(tables);  // Inserts seed data
    });
};