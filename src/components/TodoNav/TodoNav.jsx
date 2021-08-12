import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Switch } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddTodo from '../AddTodo';
import applyTheme from '../../redux/actions/theme';
import useStyles from './styles';
import Modal from '../Modal';
import { useAddTodo } from '../../hooks/useQueries';
import SortTodo from '../SortTodo';
import FilterTodo from '../FilterTodo';

const TodoNav = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onApplyTheme = () => dispatch(applyTheme());
  const { addTodo } = useAddTodo();

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
      <SortTodo className={classes.navSort} />
    </Box>
  );
};

export default TodoNav;
