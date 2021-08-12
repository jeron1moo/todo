import { SHOW_ALL } from '../constants/todoFilter';

export const filterTodo = (tags) => ({ type: SHOW_ALL, payload: { tags } });

export default { filterTodo };
