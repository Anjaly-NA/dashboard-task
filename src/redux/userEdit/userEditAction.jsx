import {
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAILURE,
} from "./userEditType";
import axios from "axios";

export const userEditRequest = () => {
  return {
    type: USER_EDIT_REQUEST,
  };
};
export const userEditSuccess = (ediResult) => {
  return {
    type: USER_EDIT_SUCCESS,
    payload: ediResult,
  };
};
export const userEditFailure = (errorMessage) => {
  return {
    type: USER_EDIT_FAILURE,
    payload: errorMessage,
  };
};
export const editUser=(userId)=>{
  return ()=>{
    return axios.put(`https://reqres.in/api/users/${userId}`);
  }
}
