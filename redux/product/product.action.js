import {ProductService} from '../../services';
import {ProductActionTypes} from './product.types';

export const getProducts = () => {
  return async dispatch => {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_REQUEST,
    });
    const response = await ProductService.getProduct();

    if (response.success) {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST,
        payload: response.products,
      });
    } else {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_FAILURE,
        payload: response.message,
      });
    }
  };
};

export const setCurrentProduct = product => {
  return {
    type: ProductActionTypes.PRODUCT_CURRENT,
    payload: product,
  };
};

export const clearCurrentProduct = () => {
  return {
    type: ProductActionTypes.PRODUCT_CURRENT,
    payload: null,
  };
};

export const getCategories = () => {
  return async dispatch => {
    const response = await ProductService.getCategories();
    if (response.success) {
      dispatch({
        type: ProductActionTypes.PRODUCT_CATEGORIES,
        payload: response,
      });
    } else {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_FAILURE,
        payload: response,
      });
    }
  };
};
