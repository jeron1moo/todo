import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

export const TodoTag = ({ id, tag, tagTodo }) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Tag</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={tag}
        onChange={(e) => tagTodo(id, e.target.value)}
        label="Tag"
      >
        <MenuItem value="TODO">Todo</MenuItem>
        <MenuItem value="DONE">Done</MenuItem>
        <MenuItem value="IN_PROGRESS">In porgress</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TodoTag;
