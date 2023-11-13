import {CartActionTypes} from './cart.types';

const INITIAL_STATE = {
  cart: [],
  total: 0,
  isLoading: false,
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CartActionTypes.CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart
          .map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              };
            }
            return item;
          })
          .filter(item => item.quantity > 0), // Удаление элементов с quantity <= 0
      };
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      }
    default:
      return state;
  }
};

export default cartReducer;
