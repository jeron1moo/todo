import { useState } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useSort = () => {
  const todosList = useSelector(({ todos }) => todos.todos);
  const { sortTodo } = useActions();

  const [sort, setSort] = useState('ASC');

  const sortedByDate = todosList.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const sortOrder = () => {
    return sort === 'ASC' ? sortedByDate : sortedByDate.reverse();
  };

  const sorted = () => {
    setSort(sort === 'ASC' ? 'DESC' : 'ASC');
    sortTodo(sortOrder());
  };

  return {
    sort,
    setSort,
    sorted,
  };
};

export default useSort;
