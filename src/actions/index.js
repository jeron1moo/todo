import { ADD_TODO } from '../constants/ActionTypes';

export const addTodo(value) {
  return { type: ADD_TODO, value }
}