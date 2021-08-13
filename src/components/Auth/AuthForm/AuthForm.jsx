import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import useStyles from './styles';
import Signup from '../Signup';
import Login from '../Login';

const AuthForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { isLoggedIn } = {}; // useSelector(({ auth }) => auth);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
      setSignup(false);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) return null;

  return (
    <Box className={classes.root}>
      {signup && <Login onSignup={() => setSignup(false)} />}
      {!signup && <Signup onLogin={() => setSignup(true)} />}
    </Box>
  );
};

export default AuthForm;
