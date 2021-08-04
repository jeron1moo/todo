import {
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GradeIcon from '@material-ui/icons/Grade';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import React from 'react';
import useStyle from './styles';

const TodoItem = ({
  todo: { id, title, description, state },
  onArchiveTodo,
  onPinTodo,
}) => {
  const classes = useStyle();
  return (
    <ListItem className={`list-item ${state}`}>
      <Grid container className={classes.listItem}>
        <Grid item xs={1}>
          {/* <Checkbox
            checked={state === 'TODO_ARCHIVED'}
            name="checked"
            onClick={() => onArchiveTodo(id)}
          /> */}
          <IconButton
            aria-label="Archive Todo"
            onClick={() => onArchiveTodo(id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <ListItemText value={title} style={{ textOverflow: 'ellipsis' }}>
            {title}
          </ListItemText>
          <Divider />
          <ListItemText
            value={description}
            style={{ textOverflow: 'ellipsis' }}
          >
            {description}
          </ListItemText>
        </Grid>
        <Grid item xs={1}>
          <ListItemSecondaryAction
            className="actions"
            onClick={(event) => event.stopPropagation()}
          >
            {state !== 'TODO_ARCHIVED' && (
              <IconButton aria-label="Pin Todo" onClick={() => onPinTodo(id)}>
                {state === 'TODO_PINNED' ? <GradeIcon /> : <StarBorderIcon />}
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default TodoItem;
