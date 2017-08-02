
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ping_pong', table => {
    table.increments('id').primary();
    table.integer('feedback');
    table.integer('dry');
    table.integer('wet');
    table.integer('delay_left');
    table.integer('delay_right');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ping_pong');
};
