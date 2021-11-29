import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import TodoTag from '../TodoTag';
import { useEditTodo } from '../../hooks/useQueries';

const EditTodo = ({ id, title, description, tag, handleClose, token }) => {
  const classes = useStyles();
  const { editTodo } = useEditTodo();
  const [state, setState] = useState({
    id,
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
        multiline
        rows={4}
        value={state.description}
        onChange={handleChange}
        fullWidth
      />
      <TodoTag
        className={classes.editTag}
        id={id}
        tag={state.tag}
        tagTodo={handleChange}
      />
      <Box className={classes.editAcitons}>
        <Button
          className={classes.actionButton}
          onClick={() => {
            editTodo({ ...state, token });
            handleClose();
          }}
          fullWidth
        >
          Edit
        </Button>
        <Button
          className={classes.actionButton}
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
