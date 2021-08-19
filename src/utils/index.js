export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const checkEmpty = (value) => value.trim() === '';

export const validateToken = (state) => {
  const { token } = state?.auth?.data;
  if (!token) throw new Error('Please log in');
  return token;
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Cel = 'C';
const Far = 'F';
export const displayTemperature = (temperature, temperatureChanged) =>
  `${temperature.toFixed()}°${temperatureChanged ? Cel : Far}`;
