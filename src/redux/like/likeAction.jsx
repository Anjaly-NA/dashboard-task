import { SET_LIKE, UNSET_LIKE } from "./likeType";

export const setLike = () => {
  return { type: SET_LIKE };
};
export const unsetLike = () => {
  return { type: UNSET_LIKE };
};
