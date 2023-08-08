import axios from "axios";
import {
  USERNAME_AVAILABLE,
  USERNAME_NOT_AVAILABLE,
  EMAIL_AVAILABLE,
  EMAIL_NOT_AVAILABLE,
} from "./types";

export const checkUsernameAvailability = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/auth/check-username/?username=${username}`
    );

    if (res.data.username_registered === false) {
      dispatch({
        type: USERNAME_AVAILABLE,
      });
    } else {
      dispatch({
        type: USERNAME_NOT_AVAILABLE,
      });
    }
  } catch (error) {
    dispatch({
      type: USERNAME_NOT_AVAILABLE,
    });
  }
};

export const checkEmailAvailability = (email) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/auth/check-email/?email=${email}`
    );
    if (res.data.email_registered === false) {
      dispatch({
        type: EMAIL_AVAILABLE,
      });
    } else {
      dispatch({
        type: EMAIL_NOT_AVAILABLE,
      });
    }
  } catch (error) {
    dispatch({
      type: EMAIL_NOT_AVAILABLE,
    });
  }
};
