import {
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAILURE,
} from "./userEditType";

const initialState = {
  loading: false,
  editUserData: {},
  editUserError: "",
};

const userEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return {
        loading: true,
        editUserData: {},
        editUserError: "",
      };
    case USER_EDIT_SUCCESS:
      return {
        loading: false,
        editUserData: action.payload,
        editUserError: "",
      };
    case USER_EDIT_FAILURE:
      return {
        loading: false,
        editUserData: {},
        editUserError: action.payload,
      };
    default:
      return state;
  }
};
export default userEditReducer;
