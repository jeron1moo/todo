import React from 'react';
import { Box, List } from '@material-ui/core';
import { useSelector } from 'react-redux';
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
  const { id } = useSelector((state) => state.auth);
  const { data, isLoading: loading, isError } = useGetTodos(id);
  const { pinTodo } = usePinTodo();
  const { archiveTodo } = useArchiveTodo();
  const { tagTodo } = useTagTodo();
  const { todos: sortedTodos } = useSort(data);
  const { todos: todosList } = useFilters(sortedTodos);

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
