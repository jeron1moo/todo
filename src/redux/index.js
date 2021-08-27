import { combineReducers } from 'redux';
import todos from './reducers/todos';
import theme from './reducers/theme';
import filters from './reducers/filters';
import auth from './reducers/auth';
import socket from './reducers/socket';

const rootReducer = combineReducers({
  todos,
  theme,
  filters,
  auth,
  socket,
});

export default rootReducer;
