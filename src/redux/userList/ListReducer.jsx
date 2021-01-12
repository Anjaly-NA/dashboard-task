import {
  USERLIST_FETCH_REQUEST,
  USERLIST_FETCH_SUCCESS,
  USERLIST_FETCH_FAILURE,
} from "./ListType";

const initialState = {
  loading: false,
  userList: [],
  userListError: "",
  totalUser: 0,
};
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERLIST_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        userList: [],
        userListError: "",
        totalUser: 0,
      };
    case USERLIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: true,
        userList: action.payload,
        userListError: "",
        totalUser: action.number,
      };
    case USERLIST_FETCH_FAILURE:
      return {
        ...state,
        loading: true,
        userList: [],
        userListError: action.payload,
        totalUser: 0,
      };
    default:
      return state;
  }
};
export default listReducer;
