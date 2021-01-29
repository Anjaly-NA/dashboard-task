import {
  SEARCH_LIST_REQUEST,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAILURE,
} from "./searchType";

const initialState = {
  loading: false,
  searchList: [],
  searchListError: "",
};

const searchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LIST_REQUEST:
      return {
        loading: true,
        searchList: [],
        searchListError: "",
      };
    case SEARCH_LIST_SUCCESS:
      return {
        loading: false,
        searchList: action.payload,
        searchListError: "",
      };
    case SEARCH_LIST_FAILURE:
      return {
        loading: false,
        searchList: [],
        searchListError: action.payload,
      };
    default:
      return state;
  }
};
export default searchListReducer;
