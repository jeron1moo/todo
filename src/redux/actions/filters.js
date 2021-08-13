import { ADD_TITLES, SHOW_ALL } from '../constants/todoFilter';

export const filterTodo = (tags) => ({ type: SHOW_ALL, payload: { tags } });
export const filterTodoTitles = (titles) => ({
  type: ADD_TITLES,
  payload: { titles },
});

export default { filterTodo, filterTodoTitles };
