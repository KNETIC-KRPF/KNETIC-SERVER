
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patch', table => {
    table.increments('id').primary();
    table.text('name').notNull();
    table.integer('master_gain').notNull();
    table.integer('account_id').unsigned().references('id').inTable('account').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patch');
};
