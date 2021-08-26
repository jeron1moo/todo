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
    userName: '',
    isEmailError: false,
    isPasswordError: false,
    isSPasswordError: false,
    isNameError: false,
    emailError: '',
    passwordError: '',
    spasswordError: '',
    nameError: '',
  });

  const { email, password, userName } = formData;

  const validate = () => {
    const validations = { ...formData };
    validations.email = validations.email.trim();
    validations.password = validations.password.trim();
    validations.userName = validations.userName.trim();

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

    if (validations.userName.length < 3) {
      validations.nameError = 'Name not valid, must be > 3 letters';
      validations.isNameError = true;
      error = true;
    }

    setFormData(validations);
    return error;
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    if (validate()) return;
    await register({ email, password, name: userName });
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
      <TextField
        name="userName"
        label="name"
        autoComplete="name"
        value={formData.userName}
        onChange={onChange}
        className={classes.input}
        error={formData.isNameError}
        helperText={formData.nameError}
      />
    </Form>
  );
};

export default Signup;
