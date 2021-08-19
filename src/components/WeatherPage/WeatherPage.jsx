import { Box, TextField, Typography, Switch } from '@material-ui/core';
import React from 'react';
import { useDebounce } from 'use-debounce';
import WeatherCard from '../WeatherCard/WeaterCard';
import useStyles from './styles';
import useTheme from '../../hooks/useTheme';

const WeatherPage = () => {
  const classes = useStyles();
  const { onApplyTheme } = useTheme();

  const [value, setValue] = React.useState('');
  const [search] = useDebounce(value, 1000);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.weatherPage}>
      <Box className={classes.pageDescription}>
        <Typography className={classes.pageTitle}>Weather</Typography>
        <Switch
          onChange={() => onApplyTheme()}
          name="themeSwitch"
          className={classes.navTheme}
        />
      </Box>
      <TextField
        className={classes.weatherSearch}
        onChange={handleChange}
        variant="outlined"
        name="name"
        value={value}
      />
      <Box className={classes.weatherCard}>
        <WeatherCard name={search} />
      </Box>
    </Box>
  );
};

export default WeatherPage;
