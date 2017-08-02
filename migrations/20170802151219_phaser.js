
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phaser', table => {
    table.increments('id').primary();
    table.integer('rate');
    table.integer('depth');
    table.integer('feedback');
    table.integer('stereo_phase');
    table.integer('BMF');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('phaser');
};
