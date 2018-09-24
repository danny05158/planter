const db = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database Synced');
    db.close();
  })
  .catch(() => {
    console.log('Something went wrong!');
    db.close();
  });
