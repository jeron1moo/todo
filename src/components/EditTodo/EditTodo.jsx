import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import TodoTag from '../TodoTag';

const EditTodo = ({ id, title, description, tag, editTodo, handleClose }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    title,
    description,
    tag,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const tagTodo = () => {};

  return (
    <Box className={classes.editTodo}>
      <TextField
        label="Title"
        name="title"
        className={classes.editInput}
        value={state.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        className={classes.editInput}
        name="description"
        value={state.description}
        onChange={handleChange}
        fullWidth
      />
      <TodoTag
        className={classes.editTag}
        id={id}
        tag={state.tag}
        tagTodo={tagTodo}
      />
      <Box className={classes.editAcitons}>
        <Button
          className={classes.themeButton}
          onClick={() => {
            editTodo(state);
            handleClose();
          }}
          fullWidth
        >
          Edit
        </Button>
        <Button
          className={classes.themeButton}
          onClick={() => {
            handleClose();
          }}
          fullWidth
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default EditTodo;
