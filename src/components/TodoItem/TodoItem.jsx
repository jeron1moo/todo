import {
  Divider,
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React from 'react';
import useStyle from './styles';
import TodoTag from '../TodoTag';
import CustomIconButton from '../CustomIconButton';
import DetailsButton from '../DetailsButton';

const TodoItem = ({
  todo: { _id, title, description, state, tag },
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
          onClick={() => archiveTodo(_id)}
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
        <DetailsButton _id={_id} />

        <TodoTag
          _id={_id}
          tag={tag}
          tagTodo={(e) => tagTodo({ _id, tag: e.target.value })}
          className={classes.todoTag}
        />
        <CustomIconButton
          className={classes.todoPin}
          state={state}
          onClick={() => pinTodo(_id)}
        />
      </Box>
    </ListItem>
  );
};

export default TodoItem;
