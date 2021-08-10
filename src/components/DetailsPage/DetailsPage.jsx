import React from 'react';

import { Box, Button, TextField, Switch } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useTheme from '../../hooks/useTheme';
import useStyles from './styles';

export const DetailsPage = ({ title, createdAt, description, tag }) => {
  const classes = useStyles();
  const { onApplyTheme } = useTheme();

  return (
    <Box className={classes.detailsPage}>
      <Switch onChange={() => onApplyTheme()} name="themeSwitch" />
      <Box className={classes.datailsTitle}>
        <TextField label="Title" value={title} variant="outlined" />
        <TextField
          value={createdAt}
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          variant="outlined"
        />
      </Box>
      <TextField
        className={classes.detailsDescription}
        label="Description"
        variant="outlined"
        multiline
        rows={12}
        value={description}
      />
      <TextField
        className={classes.detailsTag}
        label="Tag"
        variant="outlined"
        value={tag}
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
