import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/ActionTypes';

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
      case 'ADD_TODO':
        state.todos.push(action.value);
        return {
          ...state,
        };
      default:
        return state;
    }
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return todoStateReducer('ADD_TODO')(state, action);
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
