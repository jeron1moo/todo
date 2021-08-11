import {
  Divider,
  Box,
  IconButton,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import React from 'react';
import useStyle from './styles';
import TodoTag from '../TodoTag';
import CustomIconButton from '../CustomIconButton';
import DetailsButton from '../DetailsButton';

const TodoItem = ({
  todo: { id, title, description, state, tag },
  archiveTodo,
  pinTodo,
  tagTodo,
}) => {
  const classes = useStyle();
  return (
    <ListItem className={`list-item-${state}`}>
      <Box className={classes.listItem}>
        <IconButton
          className={classes.todoArchive}
          onClick={() => archiveTodo(id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
        <Box className={classes.todoBody}>
          <ListItemText className={classes.todoTitle}>{title}</ListItemText>
          <Divider className={classes.todoDivider} />
          <ListItemText className={classes.todoDescription}>
            {description}
          </ListItemText>
        </Box>
        <DetailsButton id={id} />
        <TodoTag
          id={id}
          tag={tag}
          tagTodo={tagTodo}
          className={classes.todoTag}
        />
        <CustomIconButton
          className={classes.todoPin}
          state={state}
          onClick={() => pinTodo(id)}
        />
      </Box>
    </ListItem>
  );
};

export default TodoItem;
