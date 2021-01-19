import { SET_LOADER, UNSET_LOADER } from "./loaderType";

export const setLoader = (message) => {
  return { type: SET_LOADER };
};

export const unsetLoader = () => {
  return { type: UNSET_LOADER };
};
