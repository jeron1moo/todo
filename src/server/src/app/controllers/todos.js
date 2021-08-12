const Todos = require('../models/todos');

exports.index = async (req, res) => {
  try {
    const todo = await Todos.find({}).exec();
    return res.status(200).json({ todos: todo });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(401).json({ message: 'There is no such user' });
    }

    const todo = await Todos.findOne({ _id: id });

    if (!todo) {
      return res.status(404).json({ message: 'There is no such todo' });
    }

    return res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  const { title, description, state, tag } = req.body;

  try {
    if (!title || !description || !state || !tag) {
      return res.status(400).json({ message: 'Parameters undefined' });
    }

    const todo = await new Todos({ title, description, state, tag });
    const result = todo.save();
    if (!result) {
      return res.status(400).send('Unable to save todos to database');
    }
    return res.status(200).redirect('/todos/');
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description, state, tag } = req.body;

  try {
    if (!title || !description || !state || !tag) {
      return res.status(400).json({ message: 'Parameters undefined' });
    }

    const todo = await Todos.updateOne(
      {
        _id: id,
      },
      { title, description, state, tag },
    );

    if (todo.nModified === 0) {
      return res.status(404).json({ message: 'Update error' });
    }

    return res.json({ message: 'Success.' });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todos.deleteOne({ _id: id });

    if (todo.deletedCount === 0) {
      return res.status(404).json({ message: 'There is no such todo' });
    }

    return res.json({ message: 'Success.' });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
