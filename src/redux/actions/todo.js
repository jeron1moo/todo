import axios from 'axios';
import { nanoid } from 'nanoid';

import {
  ADD_TODO_FAILURE,
  LOADING,
  ARCHIVE_TODO,
  LOAD_TODOS,
  PIN_TODO,
  ADD_TODO_SUCCESS,
} from '../constants/actionTypes';

const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo,
  },
});

const loading = () => ({
  type: LOADING,
});

const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error,
  },
});

const importTodos = (todos) => ({ type: LOAD_TODOS, payload: { todos } });

const deleteTodo = (id) => ({
  type: ARCHIVE_TODO,
  payload: { id },
});

export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .post('http://localhost:4000/todos', {
        ...todo,
        state: 'TODO_INBOX',
        id: nanoid(),
      })
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const archiveTodo = (id) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .delete(`http://localhost:4000/todos/${id}`, {
        id,
      })
      .then(() => {
        dispatch(deleteTodo(id));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const pinTodo = (id) => ({ type: PIN_TODO, payload: { id } });

export const loadTodos = () => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .get('http://localhost:4000/todos')
      .then((res) => {
        dispatch(importTodos(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
