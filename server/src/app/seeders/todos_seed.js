const seeder = require('mongoose-seed');

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DB = process.env.MONGO_DB || 'posts';

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const data = [
  {
    model: 'Todos',
    documents: [
      {
        title: 'zx',
        description: '423',
        state: 'TODO_INBOX',
        tag: 'TODO',
        _id: '61150f1cab7a31083014ca2c',
        created_at: '2021-08-12T12:07:56.777Z',
        updatedAt: '2021-08-12T12:07:56.777Z',
        __v: 0,
      },
      {
        title: '123',
        description: '432',
        state: 'TODO_PINNED',
        tag: 'DONE',
        _id: '61150f28ab7a31083014ca2f',
        created_at: '2021-08-12T12:08:08.704Z',
        updatedAt: '2021-08-12T12:08:08.704Z',
        __v: 0,
      },
      {
        title: 'asd',
        description: 'zxc',
        state: 'TODO_PINNED',
        tag: 'IN_PROGRESS',
        _id: '61150f33ab7a31083014ca32',
        created_at: '2021-08-12T12:08:19.885Z',
        updatedAt: '2021-08-12T12:08:19.885Z',
        __v: 0,
      },
      {
        title: 'zx342',
        description: 'we',
        state: 'TODO_ARCHIVED',
        tag: 'TODO',
        _id: '61150f44ab7a31083014ca35',
        created_at: '2021-08-12T12:08:36.232Z',
        updatedAt: '2021-08-12T12:08:36.232Z',
        __v: 0,
      },
    ],
  },
];

seeder.connect(url, async () => {
  seeder.loadModels(['./src/app/models/todos.js']);
  seeder.clearModels(['Todos'], () => {
    seeder.populateModels(data, (err, done) => {
      if (err) {
        return console.log('seed error', err);
      }
      if (done) {
        return console.log('seed done', done);
      }

      return seeder.disconnect();
    });
  });
});
