
exports.up = function(knex, Promise) {
  return knex.schema.createTable('compressor', table => {
    table.increments('id').primary();
    table.integer('threshold');
    table.integer('gain');
    table.integer('attack');
    table.integer('release');
    table.integer('ratio');
    table.integer('knee');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('compressor');
};
