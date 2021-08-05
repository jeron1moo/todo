import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import { getRandom } from '../../utils';

const AddTodo = ({ onAddTodo }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    id: getRandom(5, 100),
    title: '',
    description: '',
    state: 'TODO_INBOX',
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <Box className={classes.addTodo}>
      <TextField
        label="Title"
        name="title"
        value={state.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={state.description}
        onChange={handleChange}
        fullWidth
      />
      <Button onClick={() => onAddTodo(state)} fullWidth>
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
