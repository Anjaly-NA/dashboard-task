import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE,
} from "./addCustomerType";
import axios from "axios";

export const addCustomerRequest = () => {
  return { type: ADD_CUSTOMER_REQUEST };
};
export const addCustomerSuccess = (customerDetail) => {
  return { type: ADD_CUSTOMER_SUCCESS, payload: customerDetail };
};
export const addCustomerFailure = (addCustomerError) => {
  return { type: ADD_CUSTOMER_FAILURE, payload: addCustomerError };
};
export const addCustomer = (customerData) => {
    console.log(customerData,'customerData')
  return () => {
    return axios.post("https://reqres.in/api/users/", customerData);
  };
};
