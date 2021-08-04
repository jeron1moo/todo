import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Backdrop, Button, IconButton, Modal } from '@material-ui/core';
import { useSpring, animated } from '@react-spring/web';
import CloseIcon from '@material-ui/icons/Close';
import AddTodo from '../AddTodo';
import { addTodo } from '../../actions/todo';
import applyTheme from '../../actions/theme';
import { darkTheme, lightTheme } from '../../styles/theme';
import useStyles from './styles';

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

const TodoNav = ({ onAddTodo, onApplyTheme }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
      <Button onClick={() => onApplyTheme(darkTheme)}>dark</Button>
      <Button onClick={() => onApplyTheme(lightTheme)}>light</Button>
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
    onApplyTheme: (theme) => dispatch(applyTheme(theme)),
  }),
)(TodoNav);
