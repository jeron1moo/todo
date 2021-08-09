import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Switch } from '@material-ui/core';
import AddTodo from '../AddTodo';
import applyTheme from '../../redux/actions/theme';
import useStyles from './styles';
import Modal from '../Modal';
import useTodosQuery from '../../hooks/useTodosQuery';

const TodoNav = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { addTodo } = useTodosQuery();
  const onApplyTheme = () => dispatch(applyTheme());

  const events = {
    addTodo,
  };

  return (
    <Box className={`${classes.todoNav} ${className || ''}`}>
      <Switch onChange={() => onApplyTheme()} name="themeSwitch" />
      <Modal modalName="Add Todo" buttonName="Add">
        <AddTodo {...events} />
      </Modal>
    </Box>
  );
};

export default TodoNav;
