import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useSort = (data = []) => {
  const sort = useSelector((state) => state.todos.sort);
  const todos = useMemo(() => {
    const result = data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    if (sort === 'DESC') {
      return result.reverse();
    }

    return result;
  }, [sort, data]);
  return {
    todos,
  };
};

export default useSort;
