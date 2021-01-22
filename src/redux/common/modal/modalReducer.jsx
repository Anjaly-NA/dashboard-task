import { SET_MODAL, UNSET_MODAL, SET_LOADER, UNSET_LOADER } from "./modalType";

const initialState = {
  openModal: false,
  modalMessage: "",
  loader: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { openModal: true, modalMessage: action.payload };
    case UNSET_MODAL:
      return { openModal: false, modalMessage: "" };
    case SET_LOADER:
      return { openModal: false, modalMessage: "", loader: true };
    case UNSET_LOADER:
      return { loader: false };
    default:
      return state;
  }
};
export default modalReducer;
