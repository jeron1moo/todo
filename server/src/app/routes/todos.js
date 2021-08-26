const express = require('express');
const auth = require('../middleware/userAuth');

const router = express.Router();
const todos = require('../controllers/todos');

router.get('/all', todos.all);

router.get('/todo/:id', auth, todos.getById);
router.patch('/todo/:id', auth, todos.update);
router.delete('/todo/:id', auth, todos.delete);

router.get('/:id', auth, todos.index);
router.post('/:id', auth, todos.create);

module.exports = router;
