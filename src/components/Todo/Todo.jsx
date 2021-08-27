import React, { useEffect } from 'react';

import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useQueryClient } from 'react-query';
import TodoNav from '../TodoNav';
import TodoList from '../TodoList';

import useStyles from './styles';
import AuthNav from '../AuthNav';
import UsersNav from '../UsersNav';

export const Todo = () => {
  const classes = useStyles();
  const queryClient = useQueryClient();
  const { socket } = useSelector((state) => state.socket);
  useEffect(() => {
    queryClient.invalidateQueries();
  });
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
