import {
  USERLIST_FETCH_REQUEST,
  USERLIST_FETCH_SUCCESS,
  USERLIST_FETCH_FAILURE,
} from "./ListType";
import axios from "axios";

export const userlistFetchRequest = () => {
  return { type: USERLIST_FETCH_REQUEST };
};
export const userlistFetchSuccess = (userList, totalUser) => {
  return { type: USERLIST_FETCH_SUCCESS, payload: userList, number: totalUser };
};
export const userlistFetchFailure = (userListError) => {
  return { type: USERLIST_FETCH_FAILURE, payload: userListError };
};
export const fetchUserlist = (page) => {
  return (dispatch) => {
    return axios.get("https://reqres.in/api/users?page=" + page);
  };
};
