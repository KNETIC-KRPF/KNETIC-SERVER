
exports.up = function(knex, Promise) {
  return knex.schema.createTable('oscillator', table => {
    table.increments('id').primary();
    table.text('waveform').notNull();
    table.integer('gain');
    table.integer('eq_low');
    table.integer('eq_mid');
    table.integer('eq_high');
    table.integer('octive');
    table.integer('detune');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('oscillator');
};
