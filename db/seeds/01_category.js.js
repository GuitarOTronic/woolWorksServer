const AWSBUCKET = "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com"
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, photos:[{url:''}], name: 'Scarves'},
        {id: 2, photos:[{url:''}], name: 'Dresses'},
        {id: 3, photos:[{url:`${AWSBUCKET}/categories/coat_front.jpg`}], name: 'Coats'},
        {id: 4, photos:[{url:`${AWSBUCKET}/categories/bearded_teapot.jpg`}], name: 'Sculptures'},
        {id: 5, photos:[{url:`${AWSBUCKET}/categories/hat.jpg`}], name: "Hats"}
      ]);
    });
};
