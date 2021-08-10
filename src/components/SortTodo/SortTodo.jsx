import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect } from 'react';
import useSort from '../../hooks/useSort';
import useStyles from './styles';

const SortTodo = () => {
  const classes = useStyles();
  const { sort, sorted, setSort } = useSort();

  useEffect(() => {
    setSort(sort === 'ASC' ? 'DESC' : 'ASC');
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel className={classes.formLabel}>Sort Date</InputLabel>
      <Select
        className={classes.formSelect}
        value={sort}
        onChange={() => sorted()}
        label="Sort Date"
      >
        <MenuItem value="DESC">Newest</MenuItem>
        <MenuItem value="ASC">Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortTodo;
