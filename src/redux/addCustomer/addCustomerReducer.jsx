import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE,
} from "./addCustomerType";

const initialState = {
  customerDetails: {},
  customerError: "",
  loading: false,
};

const addCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_REQUEST:
      return {
        customerDetails: {},
        customerError: "",
        loading: true,
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        customerDetails: action.payload,
        customerError: "",
        loading: false,
      };
    case ADD_CUSTOMER_FAILURE:
      return {
        customerDetails: {},
        customerError: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default addCustomerReducer;
