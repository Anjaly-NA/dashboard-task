import loginReducer from "./userLogin/LoginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loginRed: loginReducer,
});
export default rootReducer;
