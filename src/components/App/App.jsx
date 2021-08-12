import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Todo from '../Todo/Todo';
import DetailsPage from '../DetailsPage/DetailsPage';

const queryClient = new QueryClient();

const App = () => {
  const choosedTheme = useSelector(({ theme }) => theme);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={choosedTheme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/todo/:id" component={DetailsPage} />;
          </Switch>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
