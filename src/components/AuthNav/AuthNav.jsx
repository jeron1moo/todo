import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useActions } from '../../hooks/useActions';
import SnackBar from '../SnackBar';

const AuthNav = () => {
  const history = useHistory();
  const classes = useStyles();
  const { isLoggedIn, message, data } = useSelector(({ auth }) => auth);
  const { logout } = useActions();
  return (
    <Box className={classes.authnav}>
      {isLoggedIn ? (
        <Box className={classes.loggedIn}>
          <Typography className={classes.loggedInName}>
            hi, {data.name.toUpperCase()}
          </Typography>
          <Button
            className={classes.logout}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Box className={classes.loggedin}>
          <Button
            className={classes.signup}
            onClick={() => {
              history.push('/auth/signup');
            }}
          >
            Signup
          </Button>
          <Button
            className={classes.login}
            onClick={() => {
              history.push('/auth/login');
            }}
          >
            Login
          </Button>
        </Box>
      )}
      {message && <SnackBar message={message} />}
    </Box>
  );
};

export default AuthNav;
