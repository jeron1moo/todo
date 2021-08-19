import produce from 'immer';
import { SHOW_ALL, ADD_TITLES } from '../constants/todoFilter';

const initialState = {
  tags: [],
  title: '',
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SHOW_ALL:
      state.tags = [...payload.tags];
      break;
    case ADD_TITLES:
      state.title = payload.title;
      break;
    default:
      break;
  }
}, initialState);
