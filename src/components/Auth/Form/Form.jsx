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
  redirectValue,
  onSubmit,
  children,
  email,
  password,
  onChange,
  onClick,
  formData: { isEmailError, isPasswordError, emailError, passwordError },
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h5">
        {name}
      </Typography>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <TextField
          name="email"
          label="email"
          autoComplete="email"
          value={email}
          onChange={onChange}
          className={classes.input}
          error={isEmailError}
          helperText={emailError}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          autoComplete="password"
          value={password}
          onChange={onChange}
          className={classes.input}
          error={isPasswordError}
          helperText={passwordError}
        />
        {children}
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label="Remember me"
          className={classes.remember}
        />
        <Button type="submit" variant="contained" className={classes.submit}>
          {name}
        </Button>
        <Box className={classes.haveAccount}>
          <Typography className={classes.description}>
            {redirectValue ? 'Already' : 'Dont'} have an account?
          </Typography>
          <Button className={classes.redirect} onClick={onClick}>
            {redirectValue ? 'Sign Up' : 'Log In'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
