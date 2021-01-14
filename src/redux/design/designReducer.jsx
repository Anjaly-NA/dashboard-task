import { DESIGN_SINGLE_SUCCESS, DESIGN_SINGLE_FAILURE } from "./designType";

const initialState = {
  singleDesign: {},
  singleDesignError: "",
};

const designSingleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGN_SINGLE_SUCCESS:
      return {
        singleDesign: action.payload,
        singleDesignError: "",
      };
    case DESIGN_SINGLE_FAILURE:
      return {
        singleDesign: {},
        singleDesignError: action.payload,
      };
    default:
      return state;
  }
};
export default designSingleReducer;
