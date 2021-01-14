import {
  DESIGN_LIST_REQUEST,
  DESIGN_LIST_SUCCESS,
  DESIGN_LIST_FAILURE,
} from "./designListType";

const initialState = {
  loading: false,
  designList: [],
  designListError: "",
};

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGN_LIST_REQUEST:
      return {
        loading: true,
        designList: [],
        designListError: "",
      };
    case DESIGN_LIST_SUCCESS:
      return {
        loading: false,
        designList: action.payload,
        designListError: "",
      };
    case DESIGN_LIST_FAILURE:
      return {
        loading: false,
        designList: [],
        designListError: action.payload,
      };
    default:
      return state;
  }
};
export default designReducer;
