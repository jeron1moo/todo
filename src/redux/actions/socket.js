import { SET_SOCKET, SET_USERS } from '../constants/socket';

export const setSocket = (socket) => ({
  type: SET_SOCKET,
  payload: { socket },
});

export const setUsers = (user) => ({
  type: SET_USERS,
  payload: { user },
});

export default { setSocket, setUsers };
