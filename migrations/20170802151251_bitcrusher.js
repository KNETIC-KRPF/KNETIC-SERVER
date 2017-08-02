
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bitcrusher', table => {
    table.increments('id').primary();
    table.integer('bits');
    table.integer('buffer');
    table.integer('norm_freq');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bitcrusher');
};
