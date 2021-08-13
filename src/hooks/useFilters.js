import { useSelector } from 'react-redux';

const useFilters = (data = []) => {
  const { tags, titles } = useSelector(({ filters }) => filters);

  const stateFilter = () => {
    if (tags.includes('ALL')) {
      return data;
    }
    return data.filter((t) => tags.includes(t.tag));
  };

  const titleFilter = () => {
    if (!titles.length) {
      return stateFilter();
    }
    return stateFilter().filter((t) => titles.includes(t.title));
  };

  const filterTodos = () => {
    return titleFilter();
  };

  const todos = filterTodos().filter(
    (t) => t.state === 'TODO_INBOX' || t.state === 'TODO_PINNED',
  );

  return {
    todos,
  };
};

export default useFilters;
