export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const checkEmpty = (value) => value.trim() === '';
