const Todos = require('../models/todos');
const Users = require('../models/users');

exports.index = async (req, res) => {
  try {
    const { user_id: id } = req.user;
    const user = await Users.findById(id).populate('todos');
    if (!user) {
      return res.status(400).send({ message: 'User error' });
    }
    return res.send({ todos: user.todos });
  } catch (err) {
    return res.status(500).send({ message: 'Unpredictable error' });
  }
};

exports.all = async (req, res) => {
  try {
    const todos = await Todos.find({}).exec();
    return res.send({ todos });
  } catch (err) {
    return res.status(500).send({ message: 'Unpredictable error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { user_id: id } = req.user;
    const { title, description, state, tag } = req.body;

    if (!title || !description || !state || !tag) {
      return res.status(400).send({ message: 'Parameters undefined' });
    }

    const todo = await new Todos({ title, description, state, tag, user: id });
    const result = await todo.save();
    if (!result) {
      return res.status(400).send('Unable to save todos to database');
    }

    const userById = await Users.findById(id);
    userById.todos.push(todo);
    await userById.save();
    return res.send(userById);
  } catch (err) {
    return res.status(500).send({ message: 'Unpredictable error' });
  }
};

exports.getById = async (req, res) => {
  const { user_id: id } = req.params;

  try {
    if (!id) {
      return res.status(401).send({ message: 'There is no such user' });
    }

    const todo = await Todos.findOne({ _id: id });

    if (!todo) {
      return res.status(404).send({ message: 'There is no such todo' });
    }

    return res.send(todo);
  } catch (err) {
    return res.status(500).send({ message: 'Unpredictable error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { user_id: userId } = req.user;

  const { title, description, state, tag } = req.body;

  try {
    if (!title || !description || !state || !tag) {
      return res.status(400).send({ message: 'Parameters undefined' });
    }

    const todo = await Todos.updateOne(
      {
        _id: id,
        user: userId,
      },
      { title, description, state, tag },
    );

    if (todo.nModified === 0) {
      return res.status(404).send({ message: 'Update error' });
    }

    return res.send({ message: 'Success.' });
  } catch (err) {
    return res.status(500).send({ message: 'Unpredictable error' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const { user_id: userId } = req.params;

  try {
    const todo = await Todos.deleteOne({ _id: id });

    if (todo.deletedCount === 0) {
      return res.status(402).send({ message: 'There is no such todo' });
    }

    return res.send({ message: 'Delete success.' });
  } catch (err) {
    return res.status(500).send({ message: 'Unpredictable error' });
  }
};
