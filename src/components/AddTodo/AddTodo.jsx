import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import { getRandom } from '../../utils';

const AddTodo = ({ addTodo, handleClose }) => {
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
        className={classes.addInput}
        value={state.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        className={classes.addInput}
        name="description"
        value={state.description}
        onChange={handleChange}
        fullWidth
      />
      <Button
        className={classes.themeButton}
        onClick={() => {
          addTodo(state);
          handleClose();
        }}
        fullWidth
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
