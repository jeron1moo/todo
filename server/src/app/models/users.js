const mongoose = require('mongoose');

const Users = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todos',
    },
  ],
});

Users.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model('Users', Users);
