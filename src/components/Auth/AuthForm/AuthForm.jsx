import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import Signup from '../Signup';
import Login from '../Login';
import SnackBar from '../../SnackBar';

const AuthForm = ({ logAuth }) => {
  const classes = useStyles();
  const history = useHistory();
  const { isLoggedIn, message } = useSelector(({ auth }) => auth);
  // const { socket } = useSelector((state) => state.socket);
  const [signup, setSignup] = useState(logAuth);
  useEffect(() => {
    if (isLoggedIn) {
      // socket.emit('loggedIn', { user: { name: data.name } });
      history.push('/');
      setSignup(false);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) return null;

  return (
    <Box className={classes.root}>
      {signup && <Login onSignup={() => setSignup(false)} />}
      {!signup && <Signup onLogin={() => setSignup(true)} />}
      {message && <SnackBar message={message} />}
    </Box>
  );
};

export default AuthForm;
