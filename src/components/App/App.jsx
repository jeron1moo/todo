import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';

import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import useActions from '../../hooks/useActions';
import DetailsPage from '../DetailsPage/DetailsPage';

const App = () => {
  const choosedTheme = useSelector(({ theme }) => theme);
  const { loadTodos } = useActions();
  loadTodos();
  return (
    <BrowserRouter>
      <ThemeProvider theme={choosedTheme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/todo/:id" component={DetailsPage} />;
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
