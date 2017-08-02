
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reverb', table => {
    table.increments('id').primary();
    table.integer('high_cut');
    table.integer('low_cut');
    table.integer('dry_level');
    table.integer('wet_level');
    table.integer('level');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reverb');
};
