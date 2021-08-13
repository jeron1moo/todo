import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { matchSorter } from 'match-sorter';
import useStyles from './styles';
import { useGetTodos } from '../../hooks/useQueries';
import { useActions } from '../../hooks/useActions';

const FilterField = () => {
  const classes = useStyles();
  const { filterTodoTitles } = useActions();
  const { data, isLoading, isError } = useGetTodos();
  const [tags, setTags] = useState({ tags: [] });

  const filterOptions = (options, { inputValue }) =>
    matchSorter(options, inputValue);

  const onTagsChange = (e, values) => {
    setTags({
      tags: values,
    });
  };

  useEffect(() => {
    filterTodoTitles(tags.tags);
  }, [tags]);

  if (isLoading) {
    return <h1>asd</h1>;
  }

  if (isError) {
    return <h1>asd</h1>;
  }

  const titles = Array.from(new Set(data.map((t) => t.title)));

  return (
    <div className={classes.filterField}>
      <Autocomplete
        multiple
        options={titles}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        limitTags={2}
        onChange={onTagsChange}
        filterSelectedOptions
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filter"
            placeholder="Titles"
          />
        )}
      />
    </div>
  );
};

export default FilterField;
