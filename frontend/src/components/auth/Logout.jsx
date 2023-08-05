import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Link, Navigate } from 'react-router-dom'; // Make sure you have installed react-router-dom with the correct version.

const Logout = ({ logout, isAuthenticated }) => {
  const handleLogout = () => {
    logout();

  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-fluid my-5">
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Logout</h1>
      <div className="my-5">
        <p>Are you sure you want to logout?</p>
        <Link
          className="btn btn-outline-primary btn-lg"
          style={{ fontSize: '1.5rem', padding: '10px 20px' }}
          to="/" 
        >
          Cancel
        </Link>
        <button
          className="btn btn-danger btn-lg mx-2"
          style={{ fontSize: '1.5rem', padding: '10px 20px' }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
