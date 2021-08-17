import axios from 'axios';
import { nanoid } from 'nanoid';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from 'graphql-request';
import WEATHER_QUERY from '../queries/weather_query';

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
    tag: 'TODO',
    createdAt: new Date(),
    modifiedAt: new Date(),
  });
  return res;
};

const tagMutate = async ({ id, tag }) => {
  const todo = await axios.get(`${process.env.REACT_APP_URL_TODO}/${id}`);
  const res = await axios.put(`${process.env.REACT_APP_URL_TODO}/${id}`, {
    ...todo.data,
    tag,
  });

  return res;
};

const getTodoById = async (id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_URL_TODO}/${id}`);
  return data;
};

const editMutate = async ({ id, title, description, tag }) => {
  const todo = await axios.get(`${process.env.REACT_APP_URL_TODO}/${id}`);
  const res = await axios.put(`${process.env.REACT_APP_URL_TODO}/${id}`, {
    ...todo.data,
    title,
    description,
    tag,
    modifiedAt: new Date(),
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

export const useTagTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(tagMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    tagTodo: mutate,
  };
};

export const useTodo = (todoId) => {
  return useQuery([TODOS, todoId], () => getTodoById(todoId), {
    enabled: !!todoId,
  });
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(editMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    editTodo: mutate,
  };
};

export const useGetTodos = () => {
  return useQuery(TODOS, async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL_TODO);
    return data;
  });
};

export const useWeatherName = (name) => {
  return useQuery(
    ['weather', name],
    async () => {
      const { getCityByName } = await request(
        process.env.REACT_APP_URL_WEATHER,
        WEATHER_QUERY,
        {
          name,
          config: {
            units: 'metric',
          },
        },
      );
      return getCityByName;
    },
    {
      enabled: !!name,
    },
  );
};

export default {
  usePinTodo,
  useTagTodo,
  useArchiveTodo,
  useAddTodo,
  useGetTodos,
  useTodo,
  useEditTodo,
  useWeatherName,
};
