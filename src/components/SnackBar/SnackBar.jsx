import { IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useActions } from '../../hooks/useActions';

const SnackBar = ({ message: { text, type } }) => {
  const { removeMessage } = useActions();
  return (
    <Snackbar
      message={text}
      variant={type}
      autoHideDuration={6000}
      onClose={() => removeMessage()}
      open
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Alert
        severity={type}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => removeMessage()}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
