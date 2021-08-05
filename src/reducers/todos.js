import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/actionTypes';

const TODO_ARCHIVED = 'TODO_ARCHIVED';
const TODO_PINNED = 'TODO_PINNED';

const todos = [
  {
    id: 1,
    title: 'Here',
    description: 'Do nothing',
    state: 'TODO_INBOX',
  },
  {
    id: 2,
    title: 'Asss',
    description: 'Relax',
    state: 'TODO_INBOX',
  },
  {
    id: 3,
    title: 'Here',
    description: 'Chill',
    state: 'TODO_PINNED',
  },
];

export default (state = todos, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return [...state, payload.todo];
    }
    case ARCHIVE_TODO: {
      const newState = state.map((todo) =>
        todo.id === payload.id ? { ...todo, state: TODO_ARCHIVED } : todo,
      );
      return newState;
    }
    case PIN_TODO: {
      const newState = state.map((todo) =>
        todo.id === payload.id ? { ...todo, state: TODO_PINNED } : todo,
      );
      return newState;
    }
    default:
      return state;
  }
};
