const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/users');

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!(email && password && name)) {
      res.status(400).send({ message: 'All input is required' });
    }

    const oldUser = await Users.findOne({ email });

    if (oldUser) {
      return res
        .status(409)
        .send({ message: 'User Already Exist. Please Login' });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await new Users({
      email: email.toLowerCase(),
      password: encryptedPassword,
      name,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '24h',
      },
    );

    user.token = token;

    const result = await user.save();
    if (!result) {
      return res
        .status(400)
        .send({ message: 'Unable to save todos to database' });
    }
    return res.status(201).send(result);
  } catch (err) {
    return res.status(500).send({ message: 'Undefined error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send({ message: 'All input is required' });
    }

    const user = await Users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '24h',
        },
      );
      user.token = token;
      return res.send(user);
    }

    return res.status(400).send({ message: 'Invalid credentials' });
  } catch (err) {
    return res.status(500).send({ message: 'Undefined error' });
  }
};
