import React, { useEffect, useState } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { TextField, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import { useGetTodos } from '../../hooks/useQueries';
import { useActions } from '../../hooks/useActions';

const FilterField = () => {
  const classes = useStyles();
  const { filterTodoTitles } = useActions();
  const [titles, setTitles] = useState([]);
  const dataState = useSelector((state) => state.auth?.data);
  const id = dataState?.id;
  const token = dataState?.token;
  const { pathname } = useLocation();
  const { data, isLoading } = useGetTodos({ pathname, id, token });
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

  const onTagsChange = (e, value) => {
    filterTodoTitles(value);
  };

  return (
    <div className={classes.filterField}>
      <Autocomplete
        options={titles}
        onChange={onTagsChange}
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
