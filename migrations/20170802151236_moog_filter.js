
exports.up = function(knex, Promise) {
  return knex.schema.createTable('moog_filter', table => {
    table.increments('id').primary();
    table.integer('buffer');
    table.integer('cutoff');
    table.integer('res');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('moog_filter');
};
