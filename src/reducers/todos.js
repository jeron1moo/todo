import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/ActionTypes';

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

const todoStateReducer = (todoState) => {
  return (state, action) => {
    switch (action.type) {
      case ARCHIVE_TODO:
      case PIN_TODO: {
        const newState = state.map((todo) =>
          todo.id === action.id ? { ...todo, state: todoState } : todo,
        );
        return newState;
      }
      case ADD_TODO: {
        return [...state, action.todo];
      }
      default:
        return state;
    }
  };
};

export default (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return todoStateReducer()(state, action);
    }
    case ARCHIVE_TODO: {
      return todoStateReducer(TODO_ARCHIVED)(state, action);
    }
    case PIN_TODO: {
      return todoStateReducer(TODO_PINNED)(state, action);
    }
    default:
      return state;
  }
};
