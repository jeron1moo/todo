import { useSelector } from 'react-redux';

const useSort = (data = []) => {
  const sort = useSelector((state) => state.todos.sort);
  const sortedByDate = data.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const sortData = () => {
    return sort === 'ASC' ? sortedByDate.reverse() : sortedByDate;
  };

  const todos = sortData();

  return {
    todos,
  };
};

export default useSort;
