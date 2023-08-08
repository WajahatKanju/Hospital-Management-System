const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
  usernameAvailable: null,
  emailAvailable: null,
};

export default initialState;
