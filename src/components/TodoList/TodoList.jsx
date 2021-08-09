import React, { useEffect } from 'react';
import { Box, List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import TodoItem from '../TodoItem';
import useStyles from './styles';
import useActions from '../../hooks/useActions';
import useSort from '../../hooks/useSort';

const selectInboxAndPinnedTodos = createSelector(
  (state) => state.todos.todos,
  (todos) =>
    todos.filter((t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED'),
);

export const TodoList = ({ className }) => {
  const classes = useStyles();
  const todosList = useSelector(selectInboxAndPinnedTodos);
  const loading = useSelector(({ todos }) => todos.loading);
  const { pinTodo, archiveTodo } = useActions();
  const { sorted } = useSort();

  const events = {
    pinTodo,
    archiveTodo,
  };

  useEffect(() => {
    if (!loading && todosList.length > 1) {
      sorted();
    }
  }, [loading]);

  if (loading) {
    return (
      <Box className={`${classes.loadingTodos} ${className || ''}`}>
        loading
      </Box>
    );
  }

  if (todosList.length === 0) {
    return (
      <Box className={`${classes.emptyTodos} ${className || ''}`}>empty</Box>
    );
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
