
exports.up = function(knex, Promise) {
  return knex.schema.createTable('overdrive', table => {
    table.increments('id').primary();
    table.integer('drive');
    table.integer('output_gain');
    table.integer('curve_amount');
    table.integer('algorithm_index');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('overdrive');
};
