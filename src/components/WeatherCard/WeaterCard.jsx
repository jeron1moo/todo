import React, { useState } from 'react';
import { Box, CircularProgress, Typography, Switch } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useWeatherName } from '../../hooks/useQueries';
import useStyles from './styles';
import { celsiusToFahrenheit } from '../../utils';

const IMG = (name) => `http://openweathermap.org/img/wn/${name}@2x.png`;
const Cel = 'C';
const Far = 'F';

const WeatherCard = ({ name }) => {
  const classes = useStyles();
  const [temperature, setTemperature] = useState(true);
  const { data, error, isFetching } = useWeatherName(name);

  const temperatureConverter = (temp) => {
    if (temperature) {
      return temp.toFixed(0);
    }
    return celsiusToFahrenheit(temp).toFixed(0);
  };

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

  const { actual, feelsLike, max, min } = data.weather.temperature;

  return (
    <Box className={classes.weatherCard}>
      <Box className={classes.cardDescription}>
        <Typography className={classes.cardName}>Current weather</Typography>
        <Box>
          <Switch onChange={() => setTemperature(!temperature)} />
        </Box>
      </Box>
      <Box />
      <Box className={classes.cardContent}>
        <Box className={classes.cardMain}>
          <Box className={classes.weatherTitle}>
            <Typography className={classes.weatherName}>{data.name}</Typography>
          </Box>
          <Box className={classes.weatherTemperature}>
            <img
              className={classes.weatherIcon}
              src={IMG(data.weather.summary.icon)}
              alt=""
            />
            <Typography className={classes.weatherAcutal}>
              {temperatureConverter(actual)}°{temperature ? Cel : Far}
            </Typography>
          </Box>
          <Typography className={classes.weatherDescirption}>
            {data.weather.summary.description}
          </Typography>
        </Box>
        <Box className={classes.cardAdditional}>
          <Box className={classes.weatherSummary}>
            <Typography className={classes.weatherFeels}>
              Feels like {temperatureConverter(feelsLike)}°
              {temperature ? Cel : Far}
            </Typography>
            <Box className={classes.highLow}>
              <Box className={classes.high}>
                <ArrowUpwardIcon />
                <Typography className={classes.weatherFeels}>
                  {temperatureConverter(max)}°{temperature ? Cel : Far}
                </Typography>
              </Box>
              <Box className={classes.low}>
                <ArrowDownwardIcon />
                <Typography className={classes.weatherFeels}>
                  {temperatureConverter(min)}°{temperature ? Cel : Far}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.weatherWind}>
            <Typography>Wind speed {data.weather.wind.speed} kph</Typography>
          </Box>
          <Box className={classes.weatherClouds}>
            <Typography className={classes.weatherHumidiy}>
              Humidity {data.weather.clouds.humidity}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherCard;
