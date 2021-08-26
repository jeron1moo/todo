import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const AddTodo = ({ addTodo, handleClose }) => {
  const classes = useStyles();
  const { id } = useSelector((state) => state.auth.data);
  const [state, setState] = useState({
    title: '',
    description: '',
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
          addTodo({ state, id });
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
