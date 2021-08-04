import { combineReducers } from 'redux';
import todos from './todos';
import themeReducer from './theme';

const rootReducer = combineReducers({
  todos,
  themeReducer,
});

export default rootReducer;
