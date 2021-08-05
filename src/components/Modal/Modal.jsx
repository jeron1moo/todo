import { Box, Button, IconButton, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const CustomModal = ({ modalName, buttonName, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen}>{buttonName}</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <Box className={classes.paper}>
          <Typography>{modalName}</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={classes.margin}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
