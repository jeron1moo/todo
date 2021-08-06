import produce from 'immer';
import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/actionTypes';

const TODO_ARCHIVED = 'TODO_ARCHIVED';
const TODO_PINNED = 'TODO_PINNED';
const TODO_INBOX = 'TODO_INBOX';

const initialState = [
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

export default produce((state, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      state.push(payload.todo);
      break;
    }
    case ARCHIVE_TODO: {
      const findTodo = state.find((todo) => todo.id === payload.id);
      findTodo.state = TODO_ARCHIVED;
      break;
    }
    case PIN_TODO: {
      const findTodo = state.find((todo) => todo.id === payload.id);
      findTodo.state =
        findTodo.state === TODO_PINNED ? TODO_INBOX : TODO_PINNED;
      break;
    }
    default:
      break;
  }
}, initialState);
