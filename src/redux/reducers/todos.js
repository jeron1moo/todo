import {
  ARCHIVE_TODO,
  PIN_TODO,
  LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  LOAD_TODOS,
} from '../constants/actionTypes';

const TODO_ARCHIVED = 'TODO_ARCHIVED';
const TODO_PINNED = 'TODO_PINNED';
const TODO_INBOX = 'TODO_INBOX';

const todos = [
  {
    id: 0,
    title: '',
    description: '',
    state: '',
  },
];

const initialState = {
  loading: false,
  todos,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TODOS: {
      return { ...state, todos: payload.todos };
    }
    case ARCHIVE_TODO: {
      const newState = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, state: TODO_ARCHIVED } : todo,
      );
      return {
        ...state,
        todos: newState,
      };
    }
    case PIN_TODO: {
      const newState = state.todos.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              state: todo.state === TODO_PINNED ? TODO_INBOX : TODO_PINNED,
            }
          : todo,
      );
      return {
        ...state,
        todos: newState,
      };
    }
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, payload],
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
