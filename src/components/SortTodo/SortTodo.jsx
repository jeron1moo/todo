import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import useSort from '../../hooks/useSort';
import useStyles from './styles';

const SortTodo = () => {
  const classes = useStyles();
  const { sort, setSort, sorted } = useSort();

  const handleChange = () => {
    setSort(sort === 'ASC' ? 'DESC' : 'ASC');
    sorted();
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel className={classes.formLabel}>Sort Date</InputLabel>
      <Select
        className={classes.formSelect}
        value={sort}
        onChange={() => handleChange()}
        label="Sort Date"
      >
        <MenuItem value="ASC">Newest</MenuItem>
        <MenuItem value="DESC">Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortTodo;
