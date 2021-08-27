import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const UsersNav = () => {
  const classes = useStyles();
  const { users } = useSelector((state) => state.socket);

  return (
    <Box className={classes.usersNav}>
      {users.map((user) => (
        <Typography key={`${user?.user?.name}`}>{user?.user?.name}</Typography>
      ))}
    </Box>
  );
};

export default UsersNav;
