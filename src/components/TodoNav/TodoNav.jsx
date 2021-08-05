import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, Switch } from '@material-ui/core';
import AddTodo from '../AddTodo';
import { addTodo } from '../../redux/actions/todo';
import applyTheme from '../../redux/actions/theme';
import useStyles from './styles';
import Modal from '../Modal';

const TodoNav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onApplyTheme = () => dispatch(applyTheme());
  const onAddTodo = (state) => dispatch(addTodo(state));

  const events = {
    onAddTodo,
  };

  return (
    <Box className={classes.todoNav}>
      <Switch onChange={() => onApplyTheme()} name="themeSwitch" />
      <Modal modalName="Add Todo" buttonName="Add">
        <AddTodo {...events} />
      </Modal>
    </Box>
  );
};

export default connect(({ todos }) => ({
  todos,
}))(TodoNav);
