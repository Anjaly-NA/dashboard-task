import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from "./productListType";

const initialState = {
  loading: false,
  productList: [],
  productListError: "",
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        productList: [],
        productListError: "",
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        productList: action.payload,
        productListError: "",
      };
    case PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        productList: [],
        productListError: action.payload,
      };
    default:
      return state;
  }
};
export default productListReducer;
