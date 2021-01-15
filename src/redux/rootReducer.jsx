import { combineReducers } from "redux";
import loginReducer from "./userLogin/LoginReducer";
import listReducer from "./userList/ListReducer";
import registerReducer from "./userRegistration/RegisterReducer";
import designReducer from "./designList/designListReducer";
import designSingleReducer from "./design/designReducer";
import addCustomerReducer from "./addCustomer/addCustomerReducer";
const rootReducer = combineReducers({
  loginRed: loginReducer,
  listRed: listReducer,
  registerRed: registerReducer,
  designRed: designReducer,
  designSingleRed: designSingleReducer,
  addCustomerRed: addCustomerReducer,
});
export default rootReducer;
