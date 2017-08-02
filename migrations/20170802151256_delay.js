
exports.up = function(knex, Promise) {
  return knex.schema.createTable('delay', table => {
    table.increments('id').primary();
    table.integer('time');
    table.integer('feedback');
    table.integer('cuttoff');
    table.integer('dry');
    table.integer('wet');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('delay');
};
