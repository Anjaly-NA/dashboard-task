import {
  USERLIST_FETCH_REQUEST,
  USERLIST_FETCH_SUCCESS,
  USERLIST_FETCH_FAILURE,
} from "./ListType";

const initialState = { loading: false, userList: [], userListError: "" };
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERLIST_FETCH_REQUEST:
      return { ...state, loading: true, userList: [], userListError: "" };
    case USERLIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: true,
        userList: action.payload,
        userListError: "",
      };
    case USERLIST_FETCH_FAILURE:
      return {
        ...state,
        loading: true,
        userList: [],
        userListError: action.payload,
      };
    default:
      return state;
  }
};
export default listReducer;
