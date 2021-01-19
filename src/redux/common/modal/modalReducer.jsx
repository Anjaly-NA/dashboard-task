import { SET_MODAL, UNSET_MODAL } from "./modalType";

const initialState = {
  openModal: false,
  modalMessage: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { openModal: true, modalMessage: action.payload };
    case UNSET_MODAL:
      return { openModal: false, modalMessage: "" };
    default:
      return state;
  }
};
export default modalReducer;
