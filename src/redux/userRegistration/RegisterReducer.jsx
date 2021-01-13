import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "./RegisterType";

const initialState = { loading: false, registerToken: "", registerError: "" };
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        registerToken: action.payload,
        registerError: "",
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        registerToken: action.payload,
        registerError: "",
      };
    case USER_REGISTER_FAILURE:
      return {
        loading: false,
        registerToken: "",
        registerError: action.payload,
      };
    default:
      return state;
  }
};
export default registerReducer;
