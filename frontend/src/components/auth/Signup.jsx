import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { Navigate } from "react-router-dom";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { username, first_name, last_name, email, password, re_password } =
    formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(username, first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
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
          onChange={(e) => onChange(e)}
          required
        />
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
          onChange={(e) => onChange(e)}
          required
        />
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

        <button className="form-btn" type="submit" name="submit">
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
});

export default connect(mapStateToProps, { signup })(Signup);
