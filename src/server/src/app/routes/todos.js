const express = require('express');

const router = express.Router();
const todos = require('../controllers/todos');

router.route('/').get(todos.index).post(todos.create);

router
  .route('/:id')
  .get(todos.getById)
  .patch(todos.update)
  .delete(todos.delete);

module.exports = router;
