import React, { useEffect, useState } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { TextField, CircularProgress } from '@material-ui/core';
import { matchSorter } from 'match-sorter';
import useStyles from './styles';
import { useGetTodos } from '../../hooks/useQueries';
import { useActions } from '../../hooks/useActions';

const FilterField = () => {
  const classes = useStyles();
  const { filterTodoTitles } = useActions();
  const [titles, setTitles] = useState([]);
  const [filters, setFilters] = useState([]);
  const { data, isLoading } = useGetTodos();
  const filter = createFilterOptions();

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    if (params.inputValue !== '') {
      filtered.push(params.inputValue);
    }

    return filtered;
  };

  useEffect(() => {
    if (data && !isLoading)
      setTitles(Array.from(new Set(data.map((t) => t.title))));
  }, [data]);

  useEffect(() => {
    filterTodoTitles(filters);
  }, [filters]);

  const onTagsChange = (e, values) => {
    if (values === null) return setFilters([]);
    return setFilters([...matchSorter(titles, values), values]);
  };

  return (
    <div className={classes.filterField}>
      <Autocomplete
        options={titles}
        values={filters}
        onChange={onTagsChange}
        // onKeyDown={onKeyDown}
        filterSelectedOptions
        filterOptions={filterOptions}
        loading={isLoading}
        getOptionLabel={(option) => {
          return option;
        }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filter"
            placeholder="titles"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    params.InputProps.endAdornment
                  )}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default FilterField;
