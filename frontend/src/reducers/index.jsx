import { combineReducers } from "redux";
import auth from "./auth";
import authValidation from "./authValidation";

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
  auth,
  authValidation,
});
