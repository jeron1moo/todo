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
      <Button className={classes.themeButton} onClick={handleOpen}>
        {buttonName}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
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
    </Box>
  );
};

export default CustomModal;
