
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('username').notNull();
    table.text('email').notNull().unique();
    table.text('password').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('account');
};
