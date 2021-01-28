import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from "./productListType";
import axios from "axios";

export const productListRequest = () => {
  return { type: PRODUCT_LIST_REQUEST };
};
export const productListSuccess = (productList) => {
  return { type: PRODUCT_LIST_SUCCESS, payload: productList };
};
export const productListFailure = (error) => {
  return { type: PRODUCT_LIST_FAILURE, payload: error };
};
export const productListFetch = (productId = "") => {
  return () => {
    return axios.get(`https://reqres.in/api/unknown/${productId}`);
  };
};
