import React from 'react';
import { Box, List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import TodoItem from '../TodoItem';
import { archiveTodo, pinTodo } from '../../redux/actions/todo';
import useStyles from './styles';

const selectInboxAndPinnedTodos = createSelector(
  (state) => state.todos,
  (todos) =>
    todos.filter((t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED'),
);

export const TodoList = ({ loading, className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todosList = useSelector(selectInboxAndPinnedTodos);
  const onArchiveTodo = (id) => dispatch(archiveTodo(id));
  const onPinTodo = (id) => dispatch(pinTodo(id));

  const events = {
    onPinTodo,
    onArchiveTodo,
  };

  if (loading) {
    return <Box className={classes.loadingTodos}>loading</Box>;
  }

  if (todosList.length === 0) {
    return <Box className={classes.emptyTodos}>empty</Box>;
  }

  const todosInOrder = [
    ...todosList.filter((t) => t.state === 'TODO_PINNED'),
    ...todosList.filter((t) => t.state !== 'TODO_PINNED'),
  ];
  return (
    <>
      {todosInOrder.length > 0 && (
        <List className={`${classes.todoNav} ${className || ''}`}>
          {todosInOrder.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...events} />
          ))}
        </List>
      )}
    </>
  );
};

export default TodoList;
