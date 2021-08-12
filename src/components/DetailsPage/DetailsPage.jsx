import React from 'react';

import { Box, Button, TextField, Switch, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import useStyles from './styles';
import { useTodo } from '../../hooks/useQueries';
import TodoTag from '../TodoTag';

export const DetailsPage = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const { onApplyTheme } = useTheme();
  const { data, isLoading, isError } = useTodo(match.params.id);

  const handleClose = () => {
    history.push('/');
  };

  const getDate = (date) => {
    return date.substring(0, 16);
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
          value={getDate(data.createdAt)}
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
        id={data.id}
        tag={data.tag}
        disabled
        className={classes.detailsTag}
      />
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </Box>
  );
};

export default DetailsPage;
