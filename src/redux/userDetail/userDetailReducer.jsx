import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
} from "./userDetailType";

const initialState = {
  loading: false,
  userDetail: {},
  userDetailError: "",
  userSupport: {},
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return {
        loading: true,
        userDetail: {},
        userDetailError: "",
        userSupport: {},
      };
    case USER_DETAIL_SUCCESS:
      return {
        loading: false,
        userDetail: action.payload,
        userDetailError: "",
        userSupport: action.support,
      };
    case USER_DETAIL_FAILURE:
      return {
        loading: false,
        userDetail: {},
        userDetailError: action.payload,
        userSupport: {},
      };
    default:
      return state;
  }
};
export default userDetailReducer;
