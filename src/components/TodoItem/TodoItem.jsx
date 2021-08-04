import {
  Checkbox,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GradeIcon from '@material-ui/icons/Grade';
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
          <Checkbox
            disabled
            checked={state === 'TODO_ARCHIVED'}
            disableRipple
            name="checked"
            onClick={() => onArchiveTodo(id)}
          />
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
