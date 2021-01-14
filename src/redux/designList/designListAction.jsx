import {
  DESIGN_LIST_REQUEST,
  DESIGN_LIST_SUCCESS,
  DESIGN_LIST_FAILURE,
} from "./designListType";
import axios from "axios";

export const designListRequest = () => {
  return { type: DESIGN_LIST_REQUEST };
};
export const designListSuccess = (designList, countDesign) => {
  return {
    type: DESIGN_LIST_SUCCESS,
    payload: designList,
    number: countDesign,
  };
};
export const designListFailure = (designError) => {
  return { type: DESIGN_LIST_FAILURE, payload: designError };
};
export const designListFetch = (page = 1) => {
  return () => {
    return axios.get("https://reqres.in/api/unknown");
  };
};
