import axios from 'axios';
import { nanoid } from 'nanoid';

import {
  ADD_TODO_FAILURE,
  LOADING,
  ARCHIVE_TODO,
  LOAD_TODOS,
  PIN_TODO,
  ADD_TODO_SUCCESS,
  TAG_TODO,
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
      .post(process.env.REACT_APP_URL_TODO, {
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
      .delete(`${process.env.REACT_APP_URL_TODO}/${id}`, {
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
export const tagTodo = (id, tag) => ({ type: TAG_TODO, payload: { id, tag } });

export const loadTodos = () => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .get(process.env.REACT_APP_URL_TODO)
      .then((res) => {
        dispatch(importTodos(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
