import { DESIGN_SINGLE_SUCCESS, DESIGN_SINGLE_FAILURE } from "./designType";
import axios from "axios";

export const designSingleSuccess = (designSingle) => {
  return { type: DESIGN_SINGLE_SUCCESS, payload: designSingle };
};
export const designSingleFailure = (designError) => {
  return { type: DESIGN_SINGLE_FAILURE, payload: designError };
};
export const designSingleFetch = (designId) => {
  return () => {
    return axios.get(`https://reqres.in/api/unknown/${designId}`);
  };
};
