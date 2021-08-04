import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Backdrop, Button, IconButton, Modal } from '@material-ui/core';
import { useSpring, animated } from '@react-spring/web';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import AddTodo from '../AddTodo';
import { addTodo } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const TodoNav = ({ onAddTodo }) => {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const events = {
    onAddTodo,
  };

  return (
    <div>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Button onClick={handleOpen}>Add</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              className={classes.margin}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <AddTodo {...events} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default connect(
  ({ todos }) => ({
    todos,
  }),
  (dispatch) => ({
    onAddTodo: (state) => dispatch(addTodo(state)),
  }),
)(TodoNav);
