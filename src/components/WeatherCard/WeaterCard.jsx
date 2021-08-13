import React from 'react';
import { Box, CircularProgress, Typography, Switch } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useWeatherName } from '../../hooks/useQueries';
import useStyles from './styles';
import useTheme from '../../hooks/useTheme';

const WeatherCard = ({ name }) => {
  const classes = useStyles();
  const { onApplyTheme } = useTheme();

  const { data, error, isFetching } = useWeatherName(name);

  if (isFetching) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">This is an error alert — check it out!</Alert>
    );
  }

  const getCity = !isFetching && data;
  if (!getCity) {
    return (
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        There is no such city — <strong>check it out!</strong>
      </Alert>
    );
  }

  const toDate = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;

    const formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(
      -2,
    )}`;

    return formattedTime;
  };

  return (
    <Box className={classes.weatherCard}>
      <Box className={classes.cardDescription}>
        <Typography>Current weather</Typography>
        <Box>
          <Switch
            onChange={() => onApplyTheme()}
            name="themeSwitch"
            className={classes.navTheme}
          />
          <Switch>CF</Switch>
        </Box>
      </Box>
      <Box />
      <Box className={classes.cardContent}>
        <Box className={classes.cardMain}>
          <Typography className={classes.weatherDate}>
            {toDate(data.weather.timestamp)}
          </Typography>
          <Box className={classes.weatherTitle}>
            <Typography className={classes.weatherName}>{data.name}</Typography>
            <Typography className={classes.weatherCountry}>
              {data.country}
            </Typography>
          </Box>
          <Box className={classes.weatherTemperature}>
            <img
              className={classes.weatherIcon}
              src={`http://openweathermap.org/img/wn/${data.weather.summary.icon}@2x.png`}
              alt=""
            />
            <Typography className={classes.weatherAcutal}>
              {(data.weather.temperature.actual - 273).toFixed(0)}°
            </Typography>
          </Box>
          <Typography className={classes.weatherDescirption}>
            {data.weather.summary.description}
          </Typography>
        </Box>
        <Box className={classes.cardAdditional}>
          <Box className={classes.weatherSummary}>
            <Typography className={classes.weatherFeels}>
              Feels like {(data.weather.temperature.feelsLike - 273).toFixed(0)}
              °С
            </Typography>
            <Box className={classes.highLow} />
          </Box>
          <Box className={classes.weatherWind}>
            <Typography>{data.weather.wind.speed}</Typography>
          </Box>
          <Box className={classes.weatherClouds}>
            <Typography className={classes.weatherHumidiy}>
              Humidity {data.weather.clouds.humidity} %
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherCard;
