import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Todo from '../Todo/Todo';

const queryClient = new QueryClient();

const App = () => {
  const choosedTheme = useSelector(({ theme }) => theme);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={choosedTheme}>
          <CssBaseline />
          <Route exact path="/" component={Todo} />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
