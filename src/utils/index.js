export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const checkEmpty = (value) => value.trim() === '';

export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export const kelvinsToCelsius = (kelvins) => kelvins - 273.15;
