const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardner = db.define('gardner', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN,
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE,
});

Plot.belongsTo(Gardner);
Gardner.belongsTo(Vegetable, { as: 'favorite_vegetable' });
Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });

module.exports = {db, Gardner, Plot, Vegetable}

// const veg1 = Vegetable.create({
//   name: 'tomato',
//   color: 'red',
//   planted_on: new Date()
// })
// .then(veg =>{
//   console.log('vegetable created')
// })

// Vegetable.bulkCreate([
//   { name: 'tomato', color: 'red', planted_on: new Date()},
//   { name: 'lettuce', color: 'green', planted_on: new Date()},
//   { name: 'carrot', color: 'orange', planted_on: new Date()},
//   { name: 'zucchini', color: 'green', planted_on: new Date()},
// ]).then( veg => { // Notice: There are no arguments here, as of right now you'll have to...
//    Gardner.bulkCreate([
//      {name: 'John', age: 30, favoriteVegetableId: Vegetable.id},
//      {name: 'Matt', age: 31, favoriteVegetableId: Vegetable.id},
//      {name: 'Jon', age: 32, favoriteVegetableId: Vegetable.id},
//      {name: 'Joe', age: 33, favoriteVegetableId: Vegetable.id},

//    ])
//   console.log('vegetable created')
// })
