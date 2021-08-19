import { ADD_TITLES, SHOW_ALL } from '../constants/todoFilter';

export const filterTodo = (tags) => ({ type: SHOW_ALL, payload: { tags } });
export const filterTodoTitles = (title) => ({
  type: ADD_TITLES,
  payload: { title },
});

export default { filterTodo, filterTodoTitles };
