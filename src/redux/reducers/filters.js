import produce from 'immer';
import { SHOW_ALL } from '../constants/todoFilter';

const initialState = {
  tags: [],
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SHOW_ALL:
      state.tags = [...payload.tags];
      break;
    default:
      break;
  }
}, initialState);
