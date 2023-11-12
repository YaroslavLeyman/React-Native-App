import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// редьюсеры
import userReducer from './user/user.reducers';
import productReducer from './product/product.reducers'; 

// конфиг стора
const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;