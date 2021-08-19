import { useSelector } from 'react-redux';
import { matchSorter } from 'match-sorter';

const ALL = 'ALL';

const useFilters = (data = []) => {
  const { tags, title } = useSelector(({ filters }) => filters);

  const stateFilter = () => {
    if (tags.includes(ALL)) {
      return data;
    }
    return data.filter((t) => tags.includes(t.tag));
  };

  const titleFilter = () => {
    if (!title) {
      return stateFilter();
    }
    const titles = Array.from(new Set(data.map((t) => t.title)));
    const filteredTitles = matchSorter(titles, title);
    return stateFilter().filter((t) => filteredTitles.includes(t.title));
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
