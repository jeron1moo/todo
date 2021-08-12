import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

const TODO = 'TODO';
const DONE = 'DONE';
const IN_PROGRESS = 'IN_PROGRESS';

export const TodoTag = ({ tag, tagTodo, className }) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="outlined"
      className={`${classes.formControl} ${className || ''}`}
    >
      <InputLabel className={classes.formLabel}>Tag</InputLabel>
      <Select
        className={classes.formSelect}
        value={tag}
        onChange={tagTodo}
        name="tag"
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
