require('./db');
require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');

const todos = require('./app/routes/todos');
const users = require('./app/routes/users');

const PORT = process.env.PORT || 5000;

const options = {
  origins: ['http://localhost:3000'],
  cors: true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket', 'polling'],
  credentials: true,
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

const server = http.createServer(app);

const io = socketIo(server, options);

app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use('/todos', todos);
app.use('/users', users);

const activeUsers = [{ user: { name: '12' } }];

io.on('connection', (socket) => {
  console.log('%cA user connected', 'color: #007acc;');

  socket.on('todo:add', ({ data }) => {
    socket.emit('todoAdded', { data });
  });

  socket.on('login', (data) => {
    activeUsers.push(data);
    socket.broadcast.emit('usersList', activeUsers);
  });

  socket.on('remove', () => {
    socket.broadcast.emit('removed');
  });

  socket.on('disconnect', () => {
    console.log('%cA user disconnected', 'color: #007acc;');
  });
});

server.listen(PORT, () => {
  console.log('Your node js server is running on PORT:', PORT);
});
