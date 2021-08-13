const seeder = require('mongoose-seed');

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DB = process.env.MONGO_DB || 'posts';

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

seeder.connect(url, async () => {
  seeder.loadModels(['./src/app/models/todos.js']);
  seeder.clearModels(['Todos'], () => {
    return seeder.disconnect();
  });
});
