import axios from 'axios';
import { nanoid } from 'nanoid';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from 'graphql-request';
import { useEffect } from 'react';
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
  try {
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
  } catch (error) {
    return error;
  }
};

const archiveMutate = async ({ id, token }) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
      config(token),
    );
    return res;
  } catch (error) {
    return error;
  }
};

const addMutate = async ({ state: todo, id, token }) => {
  try {
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
  } catch (error) {
    return error;
  }
};

const tagMutate = async ({ id, tag, token }) => {
  try {
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
  } catch (error) {
    return error;
  }
};

const getTodoById = async ({ id, token }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL_TODO}/todo/${id}`,
      config(token),
    );
    return data;
  } catch (error) {
    return error;
  }
};

const editMutate = async ({ id, title, description, tag, token }) => {
  try {
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
  } catch (error) {
    return error;
  }
};

export const usePinTodo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(pinMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    pinTodo: mutateAsync,
  };
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(addMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    addTodo: mutateAsync,
  };
};

export const useArchiveTodo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(archiveMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    archiveTodo: mutateAsync,
  };
};

export const useTagTodo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(tagMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    tagTodo: mutateAsync,
  };
};

export const useTodo = ({ id, token }) => {
  return useQuery([TODOS, id], () => getTodoById({ id, token }), {
    enabled: !!id,
  });
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(editMutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS);
    },
  });

  return {
    editTodo: mutateAsync,
  };
};

export const useReactQuerySubscription = () => {
  const queryClient = useQueryClient();
  const { setSocket } = useActions();
  const socket = io('http://localhost:5000');
  useEffect(() => {
    setSocket(socket);
    socket.on('update', () => {
      queryClient.invalidateQueries(TODOS);
    });
    return () => {
      setSocket(null);
      socket.close();
    };
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
