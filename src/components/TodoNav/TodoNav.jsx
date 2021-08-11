import React from 'react';
import { Box, Switch } from '@material-ui/core';
import AddTodo from '../AddTodo';
import useStyles from './styles';
import Modal from '../Modal';
import useTheme from '../../hooks/useTheme';
import { useAddTodo } from '../../hooks/useQueries';

const TodoNav = ({ className }) => {
  const classes = useStyles();
  const { addTodo } = useAddTodo();
  const { onApplyTheme } = useTheme();

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
