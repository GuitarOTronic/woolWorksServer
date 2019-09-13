
exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', (table)=>{
    table.increments();
    table.string('style', 100).notNullable().defaultTo('')
    table.string('name', 60).notNullable()
    table.string('sku', 100).notNullable()
    table.string('price', 100).notNullable()
    table.timestamps(true, true)
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('inventory')
};
