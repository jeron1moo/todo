import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import AddTodo from '../AddTodo';
import { addTodo } from '../../actions/todo';
import applyTheme from '../../actions/theme';
import { darkTheme, lightTheme } from '../../styles/theme';
import useStyles from './styles';
import Modal from '../Modal';

const TodoNav = ({ onAddTodo, onApplyTheme }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const events = {
    onAddTodo,
  };

  return (
    <Box className={classes.paper}>
      <Button onClick={() => onApplyTheme(darkTheme)}>dark</Button>
      <Button onClick={() => onApplyTheme(lightTheme)}>light</Button>
      <Modal modalName="Add Todo" buttonName="Add">
        <AddTodo {...events} />
      </Modal>
    </Box>
  );
};

export default connect(
  ({ todos }) => ({
    todos,
  }),
  (dispatch) => ({
    onAddTodo: (state) => dispatch(addTodo(state)),
    onApplyTheme: (theme) => dispatch(applyTheme(theme)),
  }),
)(TodoNav);
