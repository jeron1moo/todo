import {
  Divider,
  Box,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import React from 'react';
import useStyle from './styles';
import TodoTag from '../TodoTag';
import CustomIconButton from '../CustomIconButton';

const TodoItem = ({
  todo: { id, title, description, state, tag },
  archiveTodo,
  pinTodo,
  tagTodo,
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
        <Box className={classes.todoTag}>
          <TodoTag id={id} tag={tag} tagTodo={tagTodo} />
        </Box>
        <Box className={classes.todoPin}>
          <ListItemSecondaryAction
            className="actions"
            onClick={(event) => event.stopPropagation()}
          >
            <CustomIconButton state={state} onClick={() => pinTodo(id)} />
          </ListItemSecondaryAction>
        </Box>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
