import produce from 'immer';
import {
  ARCHIVE_TODO,
  PIN_TODO,
  LOADING,
  ADD_TODO_SUCCESS,
  TAG_TODO,
  ADD_TODO_FAILURE,
  LOAD_TODOS,
  SORT_TODO,
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
    createdAt: '',
    tag: '',
  },
];

const initialState = {
  loading: false,
  todos,
  error: null,
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case LOAD_TODOS:
      state.todos = [...payload.todos];
      state.loading = false;
      state.error = null;
      break;
    case ARCHIVE_TODO: {
      const findTodo = state.todos.find((todo) => todo.id === payload.id);
      findTodo.state = TODO_ARCHIVED;
      state.loading = false;
      state.error = null;
      break;
    }
    case PIN_TODO: {
      const findTodo = state.todos.find((todo) => todo.id === payload.id);
      findTodo.state =
        findTodo.state === TODO_PINNED ? TODO_INBOX : TODO_PINNED;
      break;
    }
    case TAG_TODO: {
      const findTodo = state.todos.find((todo) => todo.id === payload.id);
      findTodo.tag = payload.tag;
      break;
    }
    case LOADING:
      state.loading = true;
      break;
    case ADD_TODO_SUCCESS:
      state.loading = false;
      state.error = null;
      state.todos.push(payload);
      break;
    case ADD_TODO_FAILURE:
      state.loading = false;
      state.error = payload.error;
      break;
    case SORT_TODO:
      state.todos = [...payload.todos];
      break;
    default:
      break;
  }
}, initialState);
