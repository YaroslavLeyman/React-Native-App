// user.actions.js
import { UserActionTypes } from './user.types';

export const loginStart = () => ({
  type: UserActionTypes.USER_LOGIN_REQUEST,
});

export const loginInfo = (user) => ({
  type: UserActionTypes.USER_INFO,
  payload: user,
});

export const loginFailure = (error) => ({
  type: UserActionTypes.USER_LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: UserActionTypes.USER_LOGOUT,
});

export const loginAsync = (username, password) => {
  return dispatch => {
    dispatch(loginStart());

  };
};