import React from 'react';
import { Button } from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const DetailsButton = ({ id }) => {
  const classes = useStyles();
  const history = useHistory();

  const onClick = () => {
    history.push(`/todo/${id}`);
  };
  return (
    <Button
      color="secondary"
      className={classes.button}
      endIcon={<DetailsIcon />}
      onClick={onClick}
    >
      Details
    </Button>
  );
};

export default DetailsButton;
