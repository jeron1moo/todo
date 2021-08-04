import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/ActionTypes';

export const addTodo = (todo) => ({ type: ADD_TODO, todo });
export const archiveTodo = (id) => ({ type: ARCHIVE_TODO, id });
export const pinTodo = (id) => ({ type: PIN_TODO, id });
