import React from 'react';
import { connect } from 'react-redux';

import { Box } from '@material-ui/core';
import TodoNav from '../TodoNav/TodoNav';
import TodoList from '../TodoList';

import useStyles from './styles';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: 1,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export const Todo = ({ error }) => {
  const classes = useStyles();
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <Box className={classes.todoContainer} sx={{ display: 'grid' }}>
      <Item>
        <TodoNav />
      </Item>
      <Item>
        <TodoList />
      </Item>
    </Box>
  );
};

export default connect(({ error }) => ({ error }))(Todo);
