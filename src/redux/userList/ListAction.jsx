import {
  USERLIST_FETCH_REQUEST,
  USERLIST_FETCH_SUCCESS,
  USERLIST_FETCH_FAILURE,
} from "./ListType";
import axios from "axios";

export const userlistFetchRequest = () => {
  return { type: USERLIST_FETCH_REQUEST };
};
export const userlistFetchSuccess = (userList) => {
  return { type: USERLIST_FETCH_SUCCESS, payload: userList };
};
export const userlistFetchFailure = (userListError) => {
  return { type: USERLIST_FETCH_FAILURE, payload: userListError };
};
export const fetchUserlist = (page) => {
  console.log(page, "page list actn");
  return (dispatch) => {
    return axios.get("https://reqres.in/api/users?page=" + page);
  };
};
