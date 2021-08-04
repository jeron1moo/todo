import React from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import { archiveTodo, pinTodo } from '../../actions/todo';

export const TodoList = ({ loading, todos, onArchiveTodo, onPinTodo }) => {
  const events = {
    onPinTodo,
    onArchiveTodo,
  };

  if (loading) {
    return <div className="list-todos">loading</div>;
  }

  if (todos.length === 0) {
    return <div className="list-todos">empty</div>;
  }

  const todosInOrder = [
    ...todos.filter((t) => t.state === 'TODO_PINNED'),
    ...todos.filter((t) => t.state !== 'TODO_PINNED'),
  ];
  return (
    <>
      {todosInOrder.length > 0 && (
        <List style={{ overflowY: 'auto', height: '100%' }}>
          {todosInOrder.map((todo) => (
            <TodoItem {...todo} key={todo.id} todo={todo} {...events} />
          ))}
        </List>
      )}
    </>
  );
};

export default connect(
  ({ todos }) => ({
    todos: todos.filter(
      (t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED',
    ),
  }),
  (dispatch) => ({
    onArchiveTodo: (id) => dispatch(archiveTodo(id)),
    onPinTodo: (id) => dispatch(pinTodo(id)),
  }),
)(TodoList);
