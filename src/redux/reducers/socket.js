import produce from 'immer';
import { SET_SOCKET, SET_USERS } from '../constants/socket';

const initialState = {
  socket: null,
  users: [],
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SET_SOCKET:
      state.socket = payload.socket;
      break;
    case SET_USERS:
      state.users = payload.users;
      break;
    default:
      break;
  }
}, initialState);
