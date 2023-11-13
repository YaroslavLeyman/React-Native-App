import { CartActionTypes } from './cart.types';

export const addItem = (item) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item,
});


export const decraseItemQuantity = (id) => ({
  type: CartActionTypes.CHANGE_ITEM_QUANTITY,
  payload: { id, quantity: -1 },
})

export const increaseItemQuantity = (id) => ({
  type: CartActionTypes.CHANGE_ITEM_QUANTITY,
  payload: { id, quantity: 1 },
})

// export const changeItemQuantity = (id, quantity) => ({
//   type: CartActionTypes.CHANGE_ITEM_QUANTITY,
//   payload: { id, quantity },
// });

export const removeItem = (id) => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: { id },
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});