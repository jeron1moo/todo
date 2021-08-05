import React from 'react';
import { connect } from 'react-redux';

import { Box, Typography } from '@material-ui/core';
import TodoNav from '../TodoNav';
import TodoList from '../TodoList';

import useStyles from './styles';

export const Todo = ({ error }) => {
  const classes = useStyles();
  if (error) {
    return <Typography>Error</Typography>;
  }
  return (
    <Box className={classes.todoContainer}>
      <Box className={classes.todoItem}>
        <TodoNav />
      </Box>
      <Box className={classes.todoItem}>
        <TodoList />
      </Box>
    </Box>
  );
};

export default connect(({ error }) => ({ error }))(Todo);
