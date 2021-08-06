import {
  Divider,
  Box,
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

const TODO_ARCHIVED = 'TODO_ARCHIVED';
const TODO_PINNED = 'TODO_PINNED';

const TodoItem = ({
  todo: { id, title, description, state },
  archiveTodo,
  pinTodo,
}) => {
  const classes = useStyle();
  return (
    <ListItem className={`list-item ${state}`}>
      <Box className={classes.listItem}>
        <Box className={classes.todoArchive}>
          <IconButton aria-label="Archive Todo" onClick={() => archiveTodo(id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
        <Box className={classes.todoBody}>
          <ListItemText className={classes.todoTitle}>{title}</ListItemText>
          <Divider className={classes.todoDivider} />
          <ListItemText className={classes.todoDescription}>
            {description}
          </ListItemText>
        </Box>
        <Box className={classes.todoPin}>
          <ListItemSecondaryAction
            className="actions"
            onClick={(event) => event.stopPropagation()}
          >
            {state !== TODO_ARCHIVED && (
              <IconButton onClick={() => pinTodo(id)}>
                {state === TODO_PINNED ? <GradeIcon /> : <StarBorderIcon />}
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </Box>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
