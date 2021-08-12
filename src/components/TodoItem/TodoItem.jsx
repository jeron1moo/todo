import {
  Divider,
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import React from 'react';
import useStyle from './styles';
import TodoTag from '../TodoTag';
import CustomIconButton from '../CustomIconButton';
import DetailsButton from '../DetailsButton';
import EditTodo from '../EditTodo';
import Modal from '../Modal';

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
        <Modal
          modalName="Edit Todo"
          buttonName="Edit"
          startIcon={<EditIcon />}
          className={classes.editButton}
        >
          <EditTodo
            id={id}
            title={title}
            description={description}
            state={state}
            tag={tag}
          />
        </Modal>
        <TodoTag
          id={id}
          tag={tag}
          tagTodo={(e) => tagTodo({ id, tag: e.target.value })}
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
