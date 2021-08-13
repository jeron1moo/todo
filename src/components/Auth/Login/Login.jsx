import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import useStyles from './styles';
import Form from '../Form';

const Login = ({ onSignup }) => {
  const classes = useStyles();

  const useAuth = () => {
    return {};
  };
  const { loginUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      className={classes.root}
      onClick={onSignup}
      onChange={onChange}
      onSubmit={onSubmit}
      name="Log In"
      nameRedirect="Sign Up"
      email={formData.email}
      password={formData.password}
    />
  );
};

export default Login;
