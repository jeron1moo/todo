import produce from 'immer';
import {
  REMOVE_MESSAGE,
  UPDATE_DATA,
  FORCE_LOGOUT,
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_ACTION,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constants/auth';

const initialState = {
  data: {
    id: null,
    token: null,
  },
  isLoggingIn: false,
  isLoggingOut: false,
  isLoggedIn: false,
  isForcedLogout: false,
  isRedirectHome: false,
  message: null,
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case REMOVE_MESSAGE:
      state.message = null;
      break;
    case UPDATE_DATA:
      if (!payload) break;
      state.data = payload.response;
      state.isLoggedIn = true;
      state.isForcedLogout = false;
      break;
    case FORCE_LOGOUT:
      state.isForcedLogout = true;
      break;
    case LOGIN_ACTION:
      state.isLoggingIn = true;
      break;
    case LOGIN_SUCCESS:
      state.data = payload.response;
      state.isLoggingIn = false;
      state.isLoggedIn = true;
      state.isForcedLogout = false;
      state.message = { text: payload.message, type: 'success' };
      break;
    case LOGIN_FAILURE:
      state.isLoggingIn = false;
      state.message = { text: payload.message, type: 'error' };
      break;
    case LOGOUT_ACTION:
      state.isLoggingOut = true;
      break;
    case LOGOUT_SUCCESS:
      state.data = null;
      state.isLoggingOut = false;
      state.isLoggedIn = false;
      state.isForcedLogout = false;
      state.message = { text: payload.message, type: 'success' };
      break;
    case LOGOUT_FAILURE:
      state.isLoggingOut = false;
      state.isLoggedIn = false;
      state.isForcedLogout = false;
      state.message = { text: payload.message, type: 'error' };
      break;
    default:
      break;
  }
}, initialState);
