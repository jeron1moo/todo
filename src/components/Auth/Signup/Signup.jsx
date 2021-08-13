import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import useStyles from './styles';
import Form from '../Form';

const Signup = ({ onLogin }) => {
  const classes = useStyles();
  const useAuth = () => {
    return {};
  };
  const { loginUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    spassword: '',
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
      onClick={onLogin}
      onChange={onChange}
      onSubmit={onSubmit}
      name="Sign Up"
      nameRedirect="Log In"
      email={formData.email}
      password={formData.password}
    >
      <TextField
        name="spassword"
        label="spassword"
        type="password"
        autoComplete="spassword"
        value={formData.spassword}
        onChange={onChange}
      />
    </Form>
  );
};

export default Signup;
