import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import DetailsPage from '../DetailsPage/DetailsPage';
import AuthForm from '../Auth/AuthForm';

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={() => <AuthForm logAuth />} />
      <Route path="/auth" component={AuthForm} />\
      <PrivateRoute>
        <Route exact path="/" component={Todo} />
        <Route path="/todo/:id" component={DetailsPage} />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
