import {
  DESIGN_LIST_REQUEST,
  DESIGN_LIST_SUCCESS,
  DESIGN_LIST_FAILURE,
} from "./designListType";
import axios from "axios";

export const designListRequest = () => {
  return { type: DESIGN_LIST_REQUEST };
};
export const designListSuccess = (designList) => {
  return {
    type: DESIGN_LIST_SUCCESS,
    payload: designList,
  };
};
export const designListFailure = (designListError) => {
  return { type: DESIGN_LIST_FAILURE, payload: designListError };
};
export const designListFetch = () => {
  return () => {
    return axios.get("https://reqres.in/api/unknown");
  };
};
