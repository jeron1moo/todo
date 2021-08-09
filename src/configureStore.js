import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './redux';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];

  if (process.env.REACT_APP_REDUX_LOGS === 'true') {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  if (process.env.REACT_APP_REDUX_LOGS === 'true') {
    enhancers.push(monitorReducersEnhancer);
  }

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
