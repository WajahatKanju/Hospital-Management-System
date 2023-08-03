import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children is provided and is a valid React node.
};

export default Layout;
