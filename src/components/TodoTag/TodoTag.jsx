import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

const TODO = 'TODO';
const DONE = 'DONE';
const IN_PROGRESS = 'IN_PROGRESS';

export const TodoTag = ({ id, tag, tagTodo, className }) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="outlined"
      className={`${classes.formControl} ${className || ''}`}
    >
      <InputLabel className={classes.formLabel}>Tag</InputLabel>
      <Select
        className={classes.formSelect}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={tag}
        onChange={(e) => tagTodo(id, e.target.value)}
        label="Tag"
      >
        <MenuItem value={TODO}>Todo</MenuItem>
        <MenuItem value={DONE}>Done</MenuItem>
        <MenuItem value={IN_PROGRESS}>In porgress</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TodoTag;
