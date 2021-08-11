import React from 'react';
import { Box, List } from '@material-ui/core';
import TodoItem from '../TodoItem';
import useStyles from './styles';
import {
  useGetTodos,
  useArchiveTodo,
  usePinTodo,
  useTagTodo,
} from '../../hooks/useQueries';

export const TodoList = ({ className }) => {
  const classes = useStyles();
  const { data: todosList, isLoading: loading, isError } = useGetTodos();
  const { pinTodo } = usePinTodo();
  const { archiveTodo } = useArchiveTodo();
  const { tagTodo } = useTagTodo();

  if (isError) {
    return (
      <Box className={`${classes.loadingTodos} ${className || ''}`}>error</Box>
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
