import axios from 'axios';
import { nanoid } from 'nanoid';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from 'graphql-request';
import React from 'react';
import { io } from 'socket.io-client';
import WEATHER_QUERY from '../queries/weather_query';
import { useActions } from './useActions';

const TODOS = 'todos';
const TODO_PINNED = 'TODO_PINNED';
const TODO_INBOX = 'TODO_INBOX';
const config = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

const pinMutate = async ({ id, token }) => {
  const todo = await axios.get(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    config(token),
  );
  const res = await axios.patch(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    {
      ...todo.data,
      state: todo.data.state === TODO_PINNED ? TODO_INBOX : TODO_PINNED,
    },
    config(token),
  );
  return res;
};

const archiveMutate = async ({ id, token }) => {
  const res = await axios.delete(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    config(token),
  );
  return res;
};

const addMutate = async ({ state: todo, id, token }) => {
  const res = await axios.post(
    `${process.env.REACT_APP_URL_TODO}/${id}`,

    {
      ...todo,
      state: TODO_INBOX,
      id: nanoid(),
      tag: 'TODO',
    },
    config(token),
  );
  return res;
};

const tagMutate = async ({ id, tag, token }) => {
  const todo = await axios.get(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    config(token),
  );
  const res = await axios.patch(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    {
      ...todo.data,
      tag,
    },
    config(token),
  );

  return res;
};

const getTodoById = async ({ id, token }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    config(token),
  );
  return data;
};

const editMutate = async ({ id, title, description, tag, token }) => {
  const todo = await axios.get(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    config(token),
  );
  const res = await axios.patch(
    `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
    {
      ...todo.data,
      title,
      description,
      tag,
    },
    config(token),
  );

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

export const useTodo = ({ id, token }) => {
  return useQuery([TODOS, id], () => getTodoById({ id, token }), {
    enabled: !!id,
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

export const useReactQuerySubscription = () => {
  const queryClient = useQueryClient();
  const { setSocket } = useActions();
  const socket = io('http://localhost:5000');
  React.useEffect(() => {
    setSocket(socket);
    return () => {
      socket.close();
    };
  }, []);
  React.useEffect(() => {
    socket.on('removed', () => {
      console.log('%cuseQueries.js line:18', 'color: #007acc;');
    });
    socket.on('added', () => {
      console.log('%cewwe', 'color: #007acc;');
    });
  }, [queryClient]);
};

export const useGetTodos = ({ id, pathname, token }) => {
  return useQuery(TODOS, async () => {
    if (pathname === '/all') {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL_TODO}/all`,
        config(token),
      );
      return data.todos;
    }
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL_TODO}/${id}`,
      config(token),
    );
    return data.todos;
  });
};

export const useWeatherName = (name, unit) => {
  return useQuery(
    ['weather', name],
    async () => {
      const { getCityByName } = await request(
        process.env.REACT_APP_URL_WEATHER,
        WEATHER_QUERY,
        {
          name,
          config: {
            units: unit ? 'metric' : 'imperial',
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
