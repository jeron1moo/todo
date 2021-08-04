import { combineReducers } from 'redux';
import todos from './todos';
import theme from './theme';

const rootReducer = combineReducers({
  todos,
  theme,
});

export default rootReducer;
