import React, { useEffect } from 'react';
import { Box, List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import TodoItem from '../TodoItem';
import useStyles from './styles';
import {
  useGetTodos,
  useArchiveTodo,
  usePinTodo,
  useTagTodo,
} from '../../hooks/useQueries';
import useSort from '../../hooks/useSort';
import useFilters from '../../hooks/useFilters';

export const TodoList = ({ className }) => {
  const classes = useStyles();
  const dataState = useSelector((state) => state.auth.data);
  const { socket } = useSelector((state) => state.socket);

  const id = dataState?.id;
  const token = dataState?.token;
  const { pathname } = useLocation();
  const {
    data,
    isLoading: loading,
    isError,
  } = useGetTodos({ pathname, id, token });
  const { pinTodo } = usePinTodo();
  const { archiveTodo } = useArchiveTodo();
  const { tagTodo } = useTagTodo();
  const { todos: sortedTodos } = useSort(data);
  const { todos: todosList } = useFilters(sortedTodos);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (socket)
      socket.on('removed', () => {
        queryClient.invalidateQueries();
      });
  });

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
