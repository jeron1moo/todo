import React, { useState } from 'react';
import useStyles from './styles';
import Form from '../Form';
import { useActions } from '../../../hooks/useActions';
import { validateEmail } from '../../../utils';

const Login = ({ onSignup }) => {
  const classes = useStyles();

  const { login } = useActions();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isEmailError: false,
    isPasswordError: false,
    emailError: '',
    passwordError: '',
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
    setFormData(validations);
    return error;
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    if (validate()) return;
    login({ email, password });
  };

  return (
    <Form
      className={classes.root}
      onClick={onSignup}
      onChange={onChange}
      onSubmit={onSubmit}
      name="Log In"
      redirectValue
      formData={formData}
    />
  );
};

export default Login;
