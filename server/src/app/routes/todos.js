const express = require('express');

const router = express.Router();
const todos = require('../controllers/todos');

router
  .route('/:userId/:id')
  .get(todos.getById)
  .patch(todos.update)
  .delete(todos.delete);

router.route('/:id').post(todos.create).get(todos.index);

module.exports = router;
