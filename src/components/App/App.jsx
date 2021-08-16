import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Todo from '../Todo/Todo';
import DetailsPage from '../DetailsPage/DetailsPage';
import AuthForm from '../Auth/AuthForm';
import { useActions } from '../../hooks/useActions';

const queryClient = new QueryClient();

export const KEY_AUTH_DATA = 'KEY_AUTH_DATA';

const App = () => {
  const choosedTheme = useSelector(({ theme }) => theme);
  const [cookies, setCookie, removeCookie] = useCookies([KEY_AUTH_DATA]);
  const { updateData } = useActions();
  const { data: authData, isLoggedIn } = useSelector(({ auth }) => auth);

  const setAuthCookies = () => {
    if (authData?.token) {
      const expiryInSec = 5 * 60;
      setCookie(KEY_AUTH_DATA, authData, {
        path: '/',
        maxAge: expiryInSec,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      });
    }
  };

  const removeAuthCookies = () => {
    removeCookie(KEY_AUTH_DATA, { path: '/' });
  };

  useEffect(() => {
    const data = cookies[KEY_AUTH_DATA];
    if (data) updateData(data);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      return setAuthCookies();
    }
    return removeAuthCookies();
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={choosedTheme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/todo/:id" component={DetailsPage} />
            <Route path="/auth/login" component={() => <AuthForm logAuth />} />
            <Route path="/auth" component={AuthForm} />
          </Switch>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
