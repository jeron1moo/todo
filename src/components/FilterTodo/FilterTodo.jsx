import React, { useEffect, useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CachedIcon from '@material-ui/icons/Cached';
import DoneIcon from '@material-ui/icons/Done';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import useStyles from './styles';
import { useFilters } from '../../hooks/useActions';

const ALL = 'ALL';
const TODO = 'TODO';
const IN_PROGRESS = 'IN_PROGRESS';
const DONE = 'DONE';

const FilterTodo = () => {
  const classes = useStyles();
  const [formats, setFormats] = useState(() => [ALL]);
  const { filterTodo } = useFilters();

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  useEffect(() => {
    filterTodo(formats);
  }, [formats]);

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      className={classes.filterTodo}
    >
      <ToggleButton className={classes.filterTodo} value={ALL} aria-label="all">
        All
        <AllInclusiveIcon />
      </ToggleButton>
      <ToggleButton
        className={classes.filterButton}
        value={TODO}
        aria-label="todo"
      >
        Todo
        <ListAltIcon />
      </ToggleButton>
      <ToggleButton
        className={classes.filterButton}
        value={IN_PROGRESS}
        aria-label="in Progress"
      >
        In Progress
        <CachedIcon />
      </ToggleButton>
      <ToggleButton
        className={classes.filterButton}
        value={DONE}
        aria-label="done"
      >
        Done
        <DoneIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FilterTodo;
