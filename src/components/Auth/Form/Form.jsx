import React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

const Form = ({
  name,
  nameRedirect,
  onSubmit,
  children,
  email,
  password,
  onChange,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.paper}>
      <Typography component="h1" variant="h5">
        {name}
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          name="email"
          label="email"
          autoComplete="email"
          value={email}
          onChange={onChange}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          autoComplete="password"
          value={password}
          onChange={onChange}
        />
        {children}
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label="Remember me"
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.submit}
          onSubmit={onSubmit}
        >
          {name}
        </Button>
        <Button
          variant="contained"
          className={classes.submit}
          onClick={onClick}
        >
          {nameRedirect}
        </Button>
      </form>
    </Box>
  );
};

export default Form;
