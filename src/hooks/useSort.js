import { useState } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useSort = () => {
  const todosList = useSelector(({ todos }) => todos.todos);

  const [sort, setSort] = useState('ASC');

  const { sortTodo } = useActions();

  const sortedByDate = todosList.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  const sortBy = () => {
    if (sort === 'ASC') return sortedByDate;
    return sortedByDate.reverse();
  };

  const sorted = () => {
    sortTodo(sortBy());
  };

  return {
    sort,
    setSort,
    sorted,
  };
};

export default useSort;
