import axios from 'axios';
import {
  LOGIN_ACTION,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_ACTION,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REMOVE_MESSAGE,
  UPDATE_DATA,
} from '../constants/auth';

const authRequest = async (body, url, dispatch) => {
  try {
    dispatch({ type: LOGIN_ACTION });
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL_USERS}/${url}`,
      {
        ...body,
      },
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { response: data, message: 'Successfully login' },
    });
  } catch (e) {
    if (e.response)
      dispatch({
        type: LOGIN_FAILURE,
        payload: { message: e.response.data.message },
      });
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const token = validateToken(getState());
    dispatch({ type: LOGOUT_ACTION });
    // await axios.post(process.env.REACT_APP_URL_TODO, {
    //   token,
    // });

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: { message: 'Successfully logout' },
    });
  } catch (e) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: { message: e.response.data.message },
    });
  }
};

export const removeMessage = () => ({
  type: REMOVE_MESSAGE,
});

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: { response: data },
});

export const register = (body) => async (dispatch) =>
  authRequest(body, 'register', dispatch);

export const login = (body) => async (dispatch) =>
  authRequest(body, 'login', dispatch);
