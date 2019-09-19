
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          style: "HEADWEAR",
          name: "Mr Flops",
          description: "Flop a dee flop flop all the way over the little rabbit hill. With all the clover a girl could dream of!",
          materials:"100% merino wool",
          sku: "flopers78",
          cost: 250.99,
          photos:[
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/1_image.jpg",
              type:"FRONT"
            },
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/3_image.jpg",
              type:"BACK"
            },
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/3_image.jpg",
              type:"THUMBNAIL"
            }
          ]
        },
        {
          style: "SCARVES",
          name: "Scarf me Away",
          description: "Gentely breeze you're way through the incondensant nothingness of the multiverse with these new fashion scarves! Handmade by Donna herself!",
          materials:"100% merino wool",
          sku: "scarftoFadf",
          cost: 250233.99,
          photos:[
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/1_image.jpg",
              type:"FRONT"
            },
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/3_image.jpg",
              type:"BACK"
            },
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/3_image.jpg",
              type:"THUMBNAIL"
            }
          ]
        },
        {
          style: "DRESS",
          name: "Well Dress'ed",
          description: "Dress yo'self with dis dress!",
          materials:"100% merino wool",
          sku: "dressyDresDres",
          cost: 500,
          photos:[
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/1_image.jpg",
              type:"FRONT"
            },
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/3_image.jpg",
              type:"BACK"
            },
            {
              url: "https://donna-lark-felts-photos.s3-us-west-2.amazonaws.com/3_image.jpg",
              type:"THUMBNAIL"
            }
          ]
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('item_id_seq', (SELECT MAX(id) FROM item));`)
    });
};
