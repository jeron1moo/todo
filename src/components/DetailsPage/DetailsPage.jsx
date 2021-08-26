import React from 'react';

import { Box, Button, TextField, Switch, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import useStyles from './styles';
import { useArchiveTodo, useTagTodo, useTodo } from '../../hooks/useQueries';
import TodoTag from '../TodoTag';
import EditTodo from '../EditTodo';
import Modal from '../Modal';

export const DetailsPage = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const { onApplyTheme } = useTheme();
  const { archiveTodo } = useArchiveTodo();
  const { tagTodo } = useTagTodo();
  const { token } = useSelector((state) => state.auth.data);
  const { data, isLoading, isError } = useTodo({ id: match.params.id, token });
  const handleClose = () => {
    history.push('/');
  };

  const handleDelete = (id) => {
    archiveTodo({ id, token });
    history.push('/');
  };

  const getDate = (date) => {
    return date.substring(0, 16);
  };

  const handeChangeTag = ({ id }, e) => {
    tagTodo({ id, tag: e.target.value, token });
  };

  if (isLoading) {
    return (
      <Box>
        <IconButton
          className={classes.detailsButtonClose}
          aria-label="close"
          onClick={handleClose}
        >
          <CloseIcon className={classes.detailsIconClose} fontSize="large" />
        </IconButton>
        <Box className={`${classes.loadingTodos} `}>loading</Box>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box>
        <IconButton
          className={classes.detailsButtonClose}
          aria-label="close"
          onClick={handleClose}
        >
          <CloseIcon className={classes.detailsIconClose} fontSize="large" />
        </IconButton>
        <Box className={`${classes.loadingTodos} `}>
          error
          <Button
            variant="contained"
            className={`${classes.button} ${classes.buttonError}`}
            startIcon={<ExitToAppIcon />}
            onClick={handleClose}
          >
            Go back
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.detailsPage}>
      <IconButton
        className={classes.detailsButtonClose}
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon className={classes.detailsIconClose} fontSize="small" />
      </IconButton>
      <Switch onChange={onApplyTheme} name="themeSwitch" />
      <Box className={classes.datailsTitle}>
        <TextField
          label="Title"
          disabled
          value={data.title}
          variant="outlined"
          className={classes.detailsTitle}
        />
        <TextField
          type="datetime-local"
          value={getDate(data.created_at)}
          variant="outlined"
          className={classes.detailsDate}
          disabled
        />
      </Box>
      <TextField
        className={classes.detailsDescription}
        label="Description"
        variant="outlined"
        multiline
        rows={12}
        value={data.description}
        disabled
      />
      <TodoTag
        tag={data.tag}
        disabled
        className={classes.detailsTag}
        tagTodo={(e) => handeChangeTag(data, e)}
      />
      <Modal
        modalName="Edit Todo"
        buttonName="Edit"
        startIcon={<EditIcon />}
        className={classes.button}
      >
        <EditTodo
          id={data.id}
          title={data.title}
          description={data.description}
          state={data.state}
          tag={data.tag}
        />
      </Modal>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(data.id)}
      >
        Delete
      </Button>
    </Box>
  );
};

export default DetailsPage;
