import { useSelector } from 'react-redux';

const useFilters = (data) => {
  const tags = useSelector(({ filters }) => filters.tags);
  if (!data) {
    return {
      todos: [],
    };
  }
  const filterTodos = () => {
    const showAll = tags.includes('ALL');
    if (showAll) {
      return data.filter(
        (t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED',
      );
    }
    return data.filter((t) => {
      return (
        tags.includes(t.tag) &&
        (t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED')
      );
    });
  };
  const todos = filterTodos();
  return {
    todos,
  };
};

export default useFilters;
