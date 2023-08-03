import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

// eslint-disable-next-line react/prop-types
const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();

    login(username, password);
  };

  // if user authenticated
  // Redirect To Home Page

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          <h2>LOGIN</h2>
          <div className="underline-title"></div>
        </div>
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
          <Link className="forgot-pass" to="/reset_password">
            Forgot Password?
          </Link>

          <button className="form-btn" type="submit" name="submit">
            Submit
          </button>
          <p className="my-3">
            Don&apos;t Have an account{" "}
            <Link className="color-primary" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // Is authenticated
});

// eslint-disable-next-line react-refresh/only-export-components
// export default connect(null, {})(Login);
export default connect(mapStateToProps, { login })(Login);
// export default Login;
