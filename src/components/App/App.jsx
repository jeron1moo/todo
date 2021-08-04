import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CssBaseline } from '@material-ui/core';
import rootReducer from '../../reducers/todos';

import Todo from '../Todo/Todo';
import theme from '../../styles/theme';

const todos = [
  {
    id: 1,
    title: 'Here',
    description: 'Do nothing',
    state: 'TODO_INBOX',
  },
  {
    id: 2,
    title: 'Asss',
    description: 'Relax',
    state: 'TODO_INBOX',
  },
  {
    id: 3,
    title: 'Here',
    description: 'Chill',
    state: 'TODO_INBOX',
  },
];

const store = createStore(
  rootReducer,
  { todos },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />;
          <Route exact path="/" component={Todo} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
