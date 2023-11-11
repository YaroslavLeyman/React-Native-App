import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// редьюсеры
import userReducer from './user/user.reducers'; 

// конфиг стора
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;