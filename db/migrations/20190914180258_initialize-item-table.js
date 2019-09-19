
exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', table => {
    table.increments()
    table.string('style').defaultTo('')
    table.string('name').defaultTo('')
    table.string('sku').defaultTo('')
    table.string('materials').defaultTo('')
    table.string('description').defaultTo('')
    table.decimal('cost', 8, 2)
    table.specificType('photos','json ARRAY')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('item')
};
