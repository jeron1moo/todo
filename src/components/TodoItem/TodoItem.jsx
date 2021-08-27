import {
  Divider,
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  const dataState = useSelector(({ auth }) => auth.data);
  const s = useSelector(({ socket }) => socket);

  useEffect(() => {
    s.socket.on('removed', () => {
      console.log('%cTodoItem.jsx line:2', 'color: #007acc;');
    });
  });

  const token = dataState?.token;
  return (
    <ListItem className={`list-item-${state}`}>
      <Box className={classes.listItem}>
        <IconButton
          className={classes.todoArchive}
          onClick={() => {
            s.socket.emit('remove');
            return archiveTodo({ id, token });
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
        <Box className={classes.todoBody}>
          <ListItemText>
            <Typography className={classes.todoTitle}>{title}</Typography>
          </ListItemText>
          <Divider className={classes.todoDivider} />
          <ListItemText>
            <Typography className={classes.todoDescription}>
              {description}
            </Typography>
          </ListItemText>
        </Box>
        <DetailsButton id={id} />

        <TodoTag
          id={id}
          tag={tag}
          tagTodo={(e) => tagTodo({ id, tag: e.target.value, token })}
          className={classes.todoTag}
        />
        <CustomIconButton
          className={classes.todoPin}
          state={state}
          onClick={() => pinTodo({ id, token })}
        />
      </Box>
    </ListItem>
  );
};

export default TodoItem;
