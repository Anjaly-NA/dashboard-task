import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "./RegisterType";
import axios from "axios";

export const userRegisterRequest = () => {
  return { type: USER_REGISTER_REQUEST };
};
export const userRegisterSuccess = (registerToken) => {
  return { type: USER_REGISTER_SUCCESS, payload: registerToken };
};
export const userRegisterFailure = (registerError) => {
  return { type: USER_REGISTER_FAILURE, payload: registerError };
};
export const userRegister = (registerDetails) => {
  return (dispatch) => {
    return axios.post("https://reqres.in/api/register", registerDetails);
  };
};
