const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadDb = require(`./src/Controllers/LoadDb`)

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3002, () => {
    loadDb()
    console.log('%s listening at 3002'); // eslint-disable-line no-console
  });
});