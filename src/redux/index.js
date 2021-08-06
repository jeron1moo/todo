import { combineReducers } from 'redux';
import todos from './reducers/todos';
import theme from './reducers/theme';

const rootReducer = combineReducers({
  todos,
  theme,
});

export default rootReducer;
