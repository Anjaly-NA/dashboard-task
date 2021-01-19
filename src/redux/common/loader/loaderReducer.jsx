import { SET_LOADER, UNSET_LOADER } from "./loaderType";

const initialState = {
  openLoader: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { openLoader: true };
    case UNSET_LOADER:
      return { openLoader: false };
    default:
      return state;
  }
};
export default loaderReducer;
