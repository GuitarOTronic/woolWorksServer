
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', table => {
    table.increments()
    table.string('name').defaultTo('')
    table.specificType('photos','json ARRAY')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category')
};
