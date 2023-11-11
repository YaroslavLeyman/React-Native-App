import { UserActionTypes } from './user.types';


const INITIAL_STATE = {
  userInfo: null,
  isLoading: false,
  error: null,
};


const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionTypes.USER_INFO:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        error: null,
      };
    case UserActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default userReducer;