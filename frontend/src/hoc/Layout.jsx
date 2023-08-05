import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from  '../actions/auth';

const Layout = ( props ) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, [])
  return (

    <div className="main-container">
      <Sidebar />
      <main>{props.children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children is provided and is a valid React node.
};

export default connect(null, {checkAuthenticated, load_user})(Layout);
