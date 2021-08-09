import React from 'react';
import { Box, List } from '@material-ui/core';
import TodoItem from '../TodoItem';
import useStyles from './styles';
import useTodosQuery from '../../hooks/useTodosQuery';

export const TodoList = ({ className }) => {
  const classes = useStyles();
  const { useTodos, pinTodo, archiveTodo } = useTodosQuery();
  const { data: todosList, isLoading: loading, isError } = useTodos();

  const events = {
    pinTodo,
    archiveTodo,
  };

  if (isError) {
    return (
      <Box className={`${classes.loadingTodos} ${className || ''}`}>
        isError
      </Box>
    );
  }

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
