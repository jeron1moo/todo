import React from 'react';
import { Box, Switch } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddTodo from '../AddTodo';
import useStyles from './styles';
import Modal from '../Modal';
import useTheme from '../../hooks/useTheme';
import { useAddTodo } from '../../hooks/useQueries';
import SortTodo from '../SortTodo';
import FilterTodo from '../FilterTodo';
import FilterField from '../FilterField';

const TodoNav = ({ className }) => {
  const classes = useStyles();
  const { addTodo } = useAddTodo();
  const { onApplyTheme } = useTheme();

  const events = {
    addTodo,
  };

  return (
    <Box className={`${classes.todoNav} ${className || ''}`}>
      <Box className={classes.navActions}>
        <Switch
          onChange={() => onApplyTheme()}
          name="themeSwitch"
          className={classes.navTheme}
        />
        <Modal
          modalName="Add Todo"
          buttonName="Add"
          startIcon={<AddIcon />}
          className={classes.navAdd}
        >
          <AddTodo {...events} />
        </Modal>
      </Box>
      <FilterTodo className={classes.navFilter} />
      <Box className={classes.filterSort}>
        <FilterField />
        <SortTodo />
      </Box>
    </Box>
  );
};

export default TodoNav;
