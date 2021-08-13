import {
  LOGIN_ACTION,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_ACTION,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from '../constants/auth';

const authRequest = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_ACTION });
    const response = [];
    // dispatch(LOGIN_ACTION);
    // const response = await publicRequest<>({
    //   url: endpoint,
    //   method: 'POST',
    //   data: body,
    // });
    dispatch({ type: LOGIN_SUCCESS, payload: { response } });
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE, payload: { e } });
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const token = validateToken(getState());
    dispatch({ type: LOGOUT_ACTION });
    const response = [];
    // const response = await axios(

    //   {
    //     url: 'logout',
    //     method: 'DELETE',
    //   },
    //   token,
    //   dispatch,
    // );
    dispatch({ type: LOGOUT_SUCCESS, payload: { response } });
  } catch (e) {
    dispatch({ type: LOGOUT_FAILURE, payload: { e } });
  }
};

export const basicSignup = (body) => async (dispatch) =>
  authRequest(body, 'signup/basic', dispatch);

export const basicLogin = (body) => async (dispatch) =>
  authRequest(body, 'login/basic', dispatch);
