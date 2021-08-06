import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/actionTypes';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: { todo } });
export const archiveTodo = (id) => ({
  type: ARCHIVE_TODO,
  payload: { id },
});
export const pinTodo = (id) => ({ type: PIN_TODO, payload: { id } });
