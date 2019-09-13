
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        { style: "hat", name: "Mr Flops", sku: "flopers78", price: '10' },
        { style: "hat", name: "Prince George's Crown", sku: "G654", price: '134560' },
        { style: "dress", name: "Cinderella Gown", sku: "glassy7", price: '100000' }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('inventory_id_seq', (SELECT MAX(id) FROM inventory));`)
    });
};
