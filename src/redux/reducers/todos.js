import {
  ADD_TODO,
  ARCHIVE_TODO,
  PIN_TODO,
  TAG_TODO,
} from '../constants/actionTypes';

const TODO_ARCHIVED = 'TODO_ARCHIVED';
const TODO_PINNED = 'TODO_PINNED';
const TODO_INBOX = 'TODO_INBOX';

const todos = [
  {
    id: 1,
    title: 'Here',
    description: 'Do nothing',
    state: 'TODO_INBOX',
    tag: 'TODO',
  },
  {
    id: 2,
    title: 'Asss',
    description: 'Relax',
    state: 'TODO_INBOX',
    tag: 'DONE',
  },
  {
    id: 3,
    title: 'Here',
    description: 'Chill',
    state: 'TODO_PINNED',
    tag: 'IN_PROGRESS',
  },
];

export default (state = todos, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return [...state, payload.todo];
    }
    case ARCHIVE_TODO: {
      const newState = state.map((todo) =>
        todo.id === payload.id ? { ...todo, state: TODO_ARCHIVED } : todo,
      );
      return newState;
    }
    case PIN_TODO: {
      const newState = state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              state: todo.state === TODO_PINNED ? TODO_INBOX : TODO_PINNED,
            }
          : todo,
      );
      return newState;
    }
    case TAG_TODO: {
      const newState = state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              tag: payload.tag,
            }
          : todo,
      );
      return newState;
    }
    default:
      return state;
  }
};
