import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import DetailsPage from '../DetailsPage/DetailsPage';
import AuthForm from '../Auth/AuthForm';
import WeatherPage from '../WeatherPage/WeatherPage';
import { useReactQuerySubscription } from '../../hooks/useQueries';

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
  useReactQuerySubscription();
  return (
    <Switch>
      <Route path="/auth/login" component={() => <AuthForm logAuth />} />
      <Route path="/auth" component={AuthForm} />
      <Route path="/weather" component={WeatherPage} />
      <Route path="/all" component={Todo} />
      <PrivateRoute>
        <Route path="/todo/:id" component={DetailsPage} />
        <Route exact path="/" component={Todo} />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
