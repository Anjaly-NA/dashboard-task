import {
  DESIGN_LIST_REQUEST,
  DESIGN_LIST_SUCCESS,
  DESIGN_LIST_FAILURE,
} from "./designListType";

const initialState = {
  loading: false,
  designList: [],
  designListError: "",
  totalDesign: 0,
};

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGN_LIST_REQUEST:
      return {
        loading: true,
        designList: [],
        designListError: "",
        totalDesign: 0,
      };
    case DESIGN_LIST_SUCCESS:
      return {
        loading: false,
        designList: action.payload,
        designListError: "",
        totalDesign: action.number,
      };
    case DESIGN_LIST_FAILURE:
      return {
        loading: false,
        designList: [],
        designListError: action.payload,
        totalDesign: 0,
      };
    default:
      return state;
  }
};
export default designReducer;
