import {
  ADD_TODO,
  ARCHIVE_TODO,
  PIN_TODO,
  TAG_TODO,
} from '../constants/actionTypes';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: { todo } });
export const archiveTodo = (id) => ({
  type: ARCHIVE_TODO,
  payload: { id },
});
export const pinTodo = (id) => ({ type: PIN_TODO, payload: { id } });
export const tagTodo = (id, tag) => ({ type: TAG_TODO, payload: { id, tag } });
