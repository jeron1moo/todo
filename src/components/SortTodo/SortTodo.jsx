import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useActions } from '../../hooks/useActions';

const SortTodo = () => {
  const classes = useStyles();
  const sort = useSelector((state) => state.todos.sort);
  const { sortTodo } = useActions();

  const handleChange = () => {
    sortTodo(sort === 'ASC' ? 'DESC' : 'ASC');
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel className={classes.formLabel}>Sort Date</InputLabel>
      <Select
        className={classes.formSelect}
        value={sort}
        onChange={handleChange}
        label="Sort Date"
        name="sort"
      >
        <MenuItem value="ASC">Newest</MenuItem>
        <MenuItem value="DESC">Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortTodo;
