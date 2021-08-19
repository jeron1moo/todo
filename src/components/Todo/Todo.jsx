import React from 'react';

import { Box } from '@material-ui/core';
import TodoNav from '../TodoNav';
import TodoList from '../TodoList';

import useStyles from './styles';
import AuthNav from '../AuthNav';

export const Todo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.todoContainer}>
      <AuthNav />
      <TodoNav className={classes.todoItem} />
      <TodoList className={classes.todoItem} />
    </Box>
  );
};

export default Todo;
