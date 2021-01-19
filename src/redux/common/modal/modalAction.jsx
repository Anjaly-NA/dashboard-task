import { SET_MODAL, UNSET_MODAL } from "./modalType";

export const setModal = (message) => {
  return { type: SET_MODAL, payload: message };
};

export const unsetModal = () => {
  return { type: UNSET_MODAL };
};
