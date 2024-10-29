exports.up = function (knex) {
  return knex.schema.createTable("tables", (table) => {
    table.increments("table_id").primary();
    table.string("table_name").notNullable();
    table.integer("capacity").unsigned().notNullable();
    table
      .integer("reservation_id")
      .nullable()
      .references("reservation_id")
      .inTable("reservations")
      .onDelete('CASCADE');  // Optional, cascade on delete
    table.boolean("occupied").defaultTo(false).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tables");
};