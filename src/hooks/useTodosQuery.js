import axios from 'axios';
import { nanoid } from 'nanoid';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const TODOS = 'todos';
const TODO_PINNED = 'TODO_PINNED';
const TODO_INBOX = 'TODO_INBOX';

const pinMutate = async (id) => {
  const todo = await axios.get(`${process.env.REACT_APP_URL_TODO}/${id}`);
  const res = await axios.put(`${process.env.REACT_APP_URL_TODO}/${id}`, {
    ...todo.data,
    state: todo.data.state === TODO_PINNED ? TODO_INBOX : TODO_PINNED,
  });
  return res;
};

const archiveMutate = async (id) => {
  const res = axios.delete(`${process.env.REACT_APP_URL_TODO}/${id}`, {
    id,
  });
  return res;
};

const addMutate = async (todo) => {
  const res = await axios.post(process.env.REACT_APP_URL_TODO, {
    ...todo,
    state: 'TODO_INBOX',
    id: nanoid(),
  });
  return res;
};

export default () => {
  const queryClient = useQueryClient();

  const { mutateAsync: mutatePinAsync } = useMutation(pinMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  const { mutateAsync: mutateAsyncArchive } = useMutation(archiveMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  const { mutateAsync: mutateAddAsync } = useMutation(addMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const addTodo = async (todo) => {
    await mutateAddAsync(todo);
  };

  const useTodos = () => {
    return useQuery('todos', async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_TODO);
      return data;
    });
  };

  const archiveTodo = async (id) => {
    await mutateAsyncArchive(id);
  };

  const pinTodo = async (id) => {
    await mutatePinAsync(id);
  };

  return {
    archiveTodo,
    pinTodo,
    useTodos,
    addTodo,
  };
};
