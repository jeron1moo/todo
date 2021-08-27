import React from 'react';

import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TodoNav from '../TodoNav';
import TodoList from '../TodoList';

import useStyles from './styles';
import AuthNav from '../AuthNav';
import UsersNav from '../UsersNav';
import { useReactQuerySubscription } from '../../hooks/useQueries';

export const Todo = () => {
  const classes = useStyles();
  const { socket } = useSelector((state) => state.socket);
  useReactQuerySubscription();

  return (
    <Box className={classes.todoContainer}>
      <AuthNav />
      <TodoNav className={classes.todoItem} />
      <TodoList className={classes.todoItem} />
      <UsersNav socket={socket} />
    </Box>
  );
};

export default Todo;
