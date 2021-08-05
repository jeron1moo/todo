import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';

import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';

const App = () => {
  const choosedTheme = useSelector(({ theme }) => theme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={choosedTheme}>
        <CssBaseline />
        <Route exact path="/" component={Todo} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
