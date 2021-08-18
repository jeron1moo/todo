import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';
import Form from '../Form';
import { useActions } from '../../../hooks/useActions';
import { validateEmail } from '../../../utils';

const Signup = ({ onLogin }) => {
  const classes = useStyles();
  const { register } = useActions();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    spassword: '',
    isEmailError: false,
    isPasswordError: false,
    isSPasswordError: false,
    emailError: '',
    passwordError: '',
    spasswordError: '',
  });

  const { email, password } = formData;

  const validate = () => {
    const validations = { ...formData };
    validations.email = validations.email.trim();
    validations.password = validations.password.trim();
    let error = false;

    if (validations.email.length === 0) {
      validations.emailError = 'Email should not be empty';
      validations.isEmailError = true;
      error = true;
    }

    if (!validateEmail(validations.email)) {
      validations.emailError = 'Email is not valid';
      validations.isEmailError = true;
      error = true;
    }

    if (validations.password.length < 3) {
      validations.passwordError = 'Password not valid';
      validations.isPasswordError = true;
      error = true;
    }

    if (validations.password !== validations.spassword) {
      validations.spasswordError = 'Passwords not equal';
      validations.isSPasswordError = true;
      error = true;
    }

    setFormData(validations);
    return error;
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    if (validate()) return;
    await register({ email, password });
  };

  return (
    <Form
      className={classes.root}
      onClick={onLogin}
      onChange={onChange}
      onSubmit={onSubmit}
      name="Sign Up"
      formData={formData}
    >
      <TextField
        name="spassword"
        label="repeat password"
        type="password"
        autoComplete="repeat password"
        value={formData.spassword}
        onChange={onChange}
        className={classes.input}
        error={formData.isSPasswordError}
        helperText={formData.spasswordError}
      />
    </Form>
  );
};

export default Signup;
