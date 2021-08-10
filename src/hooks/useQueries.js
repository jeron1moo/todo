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
  const res = await axios.delete(`${process.env.REACT_APP_URL_TODO}/${id}`, {
    id,
  });
  return res;
};

const addMutate = async (todo) => {
  const res = await axios.post(process.env.REACT_APP_URL_TODO, {
    ...todo,
    state: TODO_INBOX,
    id: nanoid(),
  });
  return res;
};

export const usePinTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(pinMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    pinTodo: mutate,
  };
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(addMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    addTodo: mutate,
  };
};

export const useArchiveTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(archiveMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    archiveTodo: mutate,
  };
};

export const useTodos = () => {
  return useQuery(TODOS, async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL_TODO);
    return data;
  });
};

export default { usePinTodo, useArchiveTodo, useAddTodo, useTodos };
