import React from 'react';
import { Box, List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import TodoItem from '../TodoItem';
import useStyles from './styles';
import { useActions } from '../../hooks/useActions';

const selectFilteredInboxAndPinned = createSelector(
  (state) => state.todos.todos,
  (state) => state.filters,
  (todos, filters) => {
    const { tags } = filters;
    const showAll = tags.includes('ALL');
    if (showAll)
      return todos.filter(
        (t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED',
      );
    return todos.filter((t) => {
      return (
        tags.includes(t.tag) &&
        (t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED')
      );
    });
  },
);

export const TodoList = ({ className }) => {
  const classes = useStyles();
  const todosList = useSelector(selectFilteredInboxAndPinned);
  const { pinTodo, archiveTodo, tagTodo } = useActions();
  const loading = useSelector(({ todos }) => todos.loading);

  if (loading) {
    return (
      <Box className={`${classes.loadingTodos} ${className || ''}`}>
        loading
      </Box>
    );
  }

  if (todosList.length === 0) {
    return (
      <Box className={`${classes.emptyTodos} ${className || ''}`}>
        Nothing to found
      </Box>
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
            <TodoItem
              key={todo.id}
              todo={todo}
              pinTodo={pinTodo}
              archiveTodo={archiveTodo}
              tagTodo={tagTodo}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default TodoList;
