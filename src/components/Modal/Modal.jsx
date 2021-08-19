import { Box, Button, IconButton, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const CustomModal = ({
  modalName,
  buttonName,
  children,
  startIcon,
  className,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={`${classes.button} ${className || ''}`}
        startIcon={startIcon}
        onClick={handleOpen}
        variant="contained"
      >
        {buttonName}
      </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Box className={classes.modalContent}>
          <Box className={classes.modalDescription}>
            <Typography
              variant="h5"
              component="span"
              className={classes.modalTitle}
            >
              {modalName}
            </Typography>
            <IconButton
              className={classes.modalButton}
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon className={classes.modalClose} fontSize="small" />
            </IconButton>
          </Box>
          {React.cloneElement(children, { handleClose })}
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
