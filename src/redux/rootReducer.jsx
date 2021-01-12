import { combineReducers } from "redux";
import loginReducer from "./userLogin/LoginReducer";
import listReducer from "./userList/ListReducer";
const rootReducer = combineReducers({
  loginRed: loginReducer,
  listRed: listReducer,
});
export default rootReducer;
