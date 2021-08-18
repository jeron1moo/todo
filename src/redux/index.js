import { combineReducers } from 'redux';
import todos from './reducers/todos';
import theme from './reducers/theme';
import filters from './reducers/filters';
import auth from './reducers/auth';

const rootReducer = combineReducers({
  todos,
  theme,
  filters,
  auth,
});

export default rootReducer;
