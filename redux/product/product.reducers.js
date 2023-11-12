import {ProductActionTypes} from './product.types';

const INITIAL_STATE = {
  products: [],
  currentProduct: null,
  categories: [],
  isLoading: false,
  error: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProductActionTypes.PRODUCT_LIST:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case ProductActionTypes.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ProductActionTypes.PRODUCT_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case ProductActionTypes.PRODUCT_CURRENT:
      return {
        ...state,
        currentProduct: action.payload,
      }
    default:
        return state;
  }
};

export default productReducer;
