import { SET_LIKE, UNSET_LIKE } from "./likeType";

const initialstate = {
  like: false,
};

const likeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_LIKE:
      return { like: true };
    case UNSET_LIKE:
      return { like: false };
    default:
      return state;
  }
};

export default likeReducer;
