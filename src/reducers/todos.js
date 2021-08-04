import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/ActionTypes';

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
    state: 'TODO_INBOX',
  },
];

const todoStateReducer = (todoState) => {
  return (state, action) => {
    switch (action.type) {
      case 'TODO_ARCHIVED':
      case 'TODO_PINNED':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.id ? { ...todo, state: todoState } : todo,
          ),
        };
      case ADD_TODO:
        // state.todos.push(action.value);
        return {
          state,
        };
      default:
        return state;
    }
  };
};

export default (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return todoStateReducer(ADD_TODO)(state, action);
    }
    case ARCHIVE_TODO: {
      return todoStateReducer('TODO_ARCHIVED')(state, action);
    }
    case PIN_TODO: {
      return todoStateReducer('TODO_PINNED')(state, action);
    }
    default:
      return state;
  }
};
