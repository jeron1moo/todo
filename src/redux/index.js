import { combineReducers } from 'redux';
import todos from './reducers/todos';
import theme from './reducers/theme';
import filters from './reducers/filters';

const rootReducer = combineReducers({
  todos,
  theme,
  filters,
});

export default rootReducer;
