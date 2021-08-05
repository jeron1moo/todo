import React from 'react';
import { Box, List } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import { archiveTodo, pinTodo } from '../../redux/actions/todo';
import useStyles from './styles';

export const TodoList = ({ loading, todos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onArchiveTodo = (id) => dispatch(archiveTodo(id));
  const onPinTodo = (id) => dispatch(pinTodo(id));

  const events = {
    onPinTodo,
    onArchiveTodo,
  };

  if (loading) {
    return <Box className={classes.loadingTodos}>loading</Box>;
  }

  if (todos.length === 0) {
    return <Box className={classes.emptyTodos}>empty</Box>;
  }

  const todosInOrder = [
    ...todos.filter((t) => t.state === 'TODO_PINNED'),
    ...todos.filter((t) => t.state !== 'TODO_PINNED'),
  ];
  return (
    <>
      {todosInOrder.length > 0 && (
        <List className={classes.listTodos}>
          {todosInOrder.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...events} />
          ))}
        </List>
      )}
    </>
  );
};

export default connect(({ todos }) => ({
  todos: todos.filter(
    (t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED',
  ),
}))(TodoList);
