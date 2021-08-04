import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const AddTodo = ({ onAddTodo }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    id: random(5, 100),
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
    <Grid className={classes.addTodo} container>
      <Grid item xs={10}>
        <Grid item>
          <TextField
            label="Title"
            name="title"
            value={state.title}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Description"
            name="description"
            value={state.description}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid xs={2} item>
        <Button onClick={() => onAddTodo(state)} fullWidth>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
