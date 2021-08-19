const mongoose = require('mongoose');

const { Schema } = mongoose;

const Todos = new Schema(
  {
    title: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    state: { type: String, default: '', required: true },
    tag: { type: String, default: '', required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      modifiedAt: 'modified_at',
    },
  },
);

Todos.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model('Todos', Todos);
