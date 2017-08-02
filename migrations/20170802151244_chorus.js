
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chorus', table => {
    table.increments('id').primary();
    table.integer('feedback');
    table.integer('delay');
    table.integer('depth');
    table.integer('rate');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chorus');
};
