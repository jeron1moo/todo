import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import AddTodo from '../AddTodo';
import { addTodo } from '../../actions/todo';
import applyTheme from '../../actions/theme';
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/darkTheme';
import useStyles from './styles';
import Modal from '../Modal';

const TodoNav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onApplyTheme = (theme) => dispatch(applyTheme(theme));
  const onAddTodo = (state) => dispatch(addTodo(state));

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

export default connect(({ todos }) => ({
  todos,
}))(TodoNav);
