import {
  SEARCH_LIST_REQUEST,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAILURE,
} from "./searchType";
import axios from "axios";

export const searchListRequest = () => {
  return { type: SEARCH_LIST_REQUEST };
};
export const searchListSuccess = (searchList) => {
  return { type: SEARCH_LIST_SUCCESS, payload: searchList };
};
export const searchListFailure = (error) => {
  return { type: SEARCH_LIST_FAILURE, payload: error };
};
export const searchListFetch = () => {
  return () => {
    return axios.get(`https://reqres.in/api/unknown`);
  };
};
