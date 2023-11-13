import { UserService } from '../../services';
import { UserActionTypes } from './user.types';

export const loginStart = () => ({
  type: UserActionTypes.USER_LOGIN_REQUEST,
});

export const loginInfo = (user) => ({
  type: UserActionTypes.USER_INFO,
  payload: user,
});

export const loginFailure = (error) => {

  return dispatch => {
    dispatch({
      type: UserActionTypes.USER_LOGIN_FAILURE,
      payload: error,
    })
	// решение костыльное, просто для демонстрации ошибки, и её скрытия 
	setTimeout(() => {
		dispatch({
			type: UserActionTypes.USER_LOGIN_FAILURE,
      		payload: null,
		})
	}, 5000)
  }

};

export const logout = () => ({
  type: UserActionTypes.USER_LOGOUT,
});

export const loginAsync = (username, password) => {
  return async dispatch => {
    dispatch(loginStart());
	const response = await UserService.login(username, password);
	if (response.success) {
		dispatch(loginInfo(response.user));
	} else {
		dispatch(loginFailure(response.message));
		
	}
	// console.log('loginAsync response', response);
  };
};