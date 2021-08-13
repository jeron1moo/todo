require('dotenv').config();
const cors = require('cors');
const express = require('express');
const todos = require('./app/routes/todos');
require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/todos', todos);

app.listen(PORT, () => {
  console.log('Your node js server is running on PORT:', PORT);
});
