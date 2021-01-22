import { SET_MODAL, UNSET_MODAL, SET_LOADER, UNSET_LOADER } from "./modalType";

export const setModal = (message) => {
  return { type: SET_MODAL, payload: message };
};

export const unsetModal = () => {
  return { type: UNSET_MODAL };
};
export const setLoader = () => {
  return { type: SET_LOADER };
};
export const unsetLoader = () => {
  return { type: UNSET_LOADER };
};
