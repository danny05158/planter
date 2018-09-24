// const db = require('./models');

const {db, Gardner, Plot, Vegetable} = require('./models')

// Vegetable.bulkCreate([
//   { name: 'tomato', color: 'red', planted_on: new Date()},
//   { name: 'lettuce', color: 'green', planted_on: new Date()},
//   { name: 'carrot', color: 'orange', planted_on: new Date()},
//   { name: 'zucchini', color: 'green', planted_on: new Date()},
// ]).then( veg => { // Notice: There are no arguments here, as of right now you'll have to...
//   console.log('vegetable created')
// })

db.sync({force: true})
.then(() => {
  Vegetable.bulkCreate([
    { name: 'tomato', color: 'red', planted_on: new Date()},
    { name: 'lettuce', color: 'green', planted_on: new Date()},
    { name: 'carrot', color: 'orange', planted_on: new Date()},
    { name: 'zucchini', color: 'green', planted_on: new Date()},
  ])
  .then( (veg) => { // Notice: There are no arguments here, as of right now you'll have to...
     Gardner.bulkCreate([
       {name: 'John', age: 30, favoriteVegetableId: Vegetable.id},
       {name: 'Matt', age: 31, favoriteVegetableId: Vegetable.id},
       {name: 'Jon', age: 32, favoriteVegetableId: Vegetable.id},
       {name: 'Joe', age: 33, favoriteVegetableId: Vegetable.id},
      ])
  })
})
.then( () => {

  console.log('Database Synced');
    // db.close();

  })
  .catch(() => {
     console.log('Something went wrong!');
    db.close();
  });
