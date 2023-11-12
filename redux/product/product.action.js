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
