import { ADD_TODO, ARCHIVE_TODO, PIN_TODO } from '../constants/ActionTypes';

export const addTodo = (value) => ({ type: ADD_TODO, value });
export const archiveTodo = (id) => ({ type: ARCHIVE_TODO, id });
export const pinTodo = (id) => ({ type: PIN_TODO, id });
