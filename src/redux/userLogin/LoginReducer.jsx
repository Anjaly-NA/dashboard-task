import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./LoginTypes";

const initialState = {
  loading: false,
  userToken: "",
  errorMessage: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userToken: action.payload,
        loading: false,
        errorMessage: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        userToken: "",
      };
    default:
      return state;
  }
};
export default loginReducer;
