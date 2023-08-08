import {
  EMAIL_AVAILABLE,
  EMAIL_NOT_AVAILABLE,
  USERNAME_AVAILABLE,
  USERNAME_NOT_AVAILABLE,
} from "../actions/types";

import initialState from "./initialState";

// eslint-disable-next-line react-refresh/only-export-components
export default function (
  state = initialState,
  action = { type: "", payload: null }
) {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;
  switch (type) {
    case USERNAME_AVAILABLE:
      return {
        ...state,
        usernameAvailable: true,
      };
    case USERNAME_NOT_AVAILABLE:
      return {
        ...state,
        usernameAvailable: false,
      };
    case EMAIL_AVAILABLE:
      return {
        ...state,
        emailAvailable: true,
      };
    case EMAIL_NOT_AVAILABLE:
      return {
        ...state,
        emailAvailable: false,
      };
    default:
      return state;
  }
}
