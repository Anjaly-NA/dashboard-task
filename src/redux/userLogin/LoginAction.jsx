import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./LoginTypes";
import axios from "axios";

export const userLoginRequest = () => {
  return { type: USER_LOGIN_REQUEST };
};
export const userLoginSuccess = (userToken) => {
  return { type: USER_LOGIN_SUCCESS, payload: userToken };
};
export const userLoginFailure = (errorMessage) => {
  return { type: USER_LOGIN_FAILURE, payload: errorMessage };
};
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(userLoginRequest);
    try {
      const response = await axios
        .post("https://reqres.in/api/login", credentials);
      if (response.status === 200) {
        dispatch(userLoginSuccess(response.data.token));
      }
    } catch (error) {
      dispatch(userLoginFailure(error.message));
    }
  };
};
