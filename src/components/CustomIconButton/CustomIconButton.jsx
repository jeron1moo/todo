import React from 'react';
import { IconButton } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const TODO_PINNED = 'TODO_PINNED';

const CustomIconButton = ({ onClick, state }) => {
  return (
    <IconButton onClick={onClick}>
      {state === TODO_PINNED ? <GradeIcon /> : <StarBorderIcon />}
    </IconButton>
  );
};

export default CustomIconButton;
