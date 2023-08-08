/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// Signup.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import {
  checkUsernameAvailability,
  checkEmailAvailability,
} from "../../actions/authValidation";
import { Navigate } from "react-router-dom";

const Signup = ({
  signup,
  checkUsernameAvailability,
  checkEmailAvailability,
  isAuthenticated,
  usernameAvailable,
  emailAvailable,
}) => {
  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [usernameValid, setUsernameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);

  const onChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { username, first_name, last_name, email, password, re_password } =
    formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(username, first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const handleUsernameBlur = () => {
    setUsernameValid(isUsernameValid(username));
    checkUsernameAvailability(username);
  };

  const handleEmailBlur = () => {
    setEmailValid(isEmailValid(email));
    checkEmailAvailability(email);
  };

  const isUsernameValid = (username) => {
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    return usernamePattern.test(username);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container m-5">
      <h2 className="title">SIGN UP</h2>
      <div className="underline-title"></div>
      <form method="post" className="form" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="user-username">&nbsp;Username</label>
        <input
          id="user-username"
          className="form-content"
          type="text"
          name="username"
          autoComplete="on"
          value={username}
          onBlur={handleUsernameBlur}
          onChange={(e) => onChange(e)}
          required
        />
        {usernameAvailable === false && (
          <p className="error-message" style={{ color: "red" }}>
            Username is not available. Already Taken
          </p>
        )}
        {usernameValid === false && (
          <p className="error-message" style={{ color: "red" }}>
            Username can only contain letters, numbers, and underscores.
          </p>
        )}

        <div className="form-border"></div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="user-firstname">&nbsp;First Name</label>
            <input
              id="user-firstname"
              className="form-content"
              type="text"
              name="first_name"
              autoComplete="on"
              value={first_name}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="form-border"></div>
          </div>
          <div className="form-column">
            <label htmlFor="user-lastname">&nbsp;Last Name</label>
            <input
              id="user-lastname"
              className="form-content"
              type="text"
              name="last_name"
              autoComplete="on"
              value={last_name}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="form-border"></div>
          </div>
        </div>

        <label htmlFor="user-email">&nbsp;Email</label>
        <input
          id="user-email"
          className="form-content"
          type="email"
          name="email"
          autoComplete="on"
          value={email}
          onBlur={handleEmailBlur}
          onChange={(e) => onChange(e)}
          required
        />
        {emailAvailable === false && (
          <p className="error-message" style={{ color: "red" }}>
            Email is not available. Already Taken
          </p>
        )}
        {emailValid === false && (
          <p className="error-message" style={{ color: "red" }}>
            Please enter a valid email address (e.g., example@example.com).
          </p>
        )}
        <div className="form-border"></div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="user-password">&nbsp;Password</label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="form-border"></div>
          </div>

          <div className="form-column">
            <label htmlFor="user-confirmpassword">&nbsp;Confirm Password</label>
            <input
              id="user-confirmpassword"
              className="form-content"
              type="password"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="form-border"></div>
          </div>
        </div>
        <ul className="my-5">
          <li className="">
            Your password can’t be too similar to your other personal
            information.
          </li>
          <li className="">
            Your password must contain at least 8 characters.
          </li>
          <li className="">Your password can’t be a commonly used password.</li>
          <li className="">Your password can’t be entirely numeric.</li>
        </ul>
        <button
          className="form-btn"
          type="submit"
          name="submit"
          disabled={!usernameAvailable || !emailAvailable}
        >
          Register
        </button>
      </form>
      <p className="my-3">
        Already have an account?{" "}
        <Link className="color-primary" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  usernameAvailable: state.authValidation.usernameAvailable,
  emailAvailable: state.authValidation.emailAvailable,
});

export default connect(mapStateToProps, {
  checkUsernameAvailability,
  checkEmailAvailability,
  signup,
})(Signup);
