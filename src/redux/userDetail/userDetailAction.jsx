import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
} from "./userDetailType";
import axios from "axios";

export const userDetailRequest = () => {
  return { type: USER_DETAIL_REQUEST };
};
export const userDetailSuccess = (userDetail, userSupport) => {
  return {
    type: USER_DETAIL_SUCCESS,
    payload: userDetail,
    support: userSupport,
  };
};
export const userDetailFailure = (userDetailError) => {
  return { type: USER_DETAIL_FAILURE, payload: userDetailError };
};
export const userDetailFetch = (userId) => {
  return () => {
    return axios.get(`https://reqres.in/api/users/${userId}`);
  };
};
