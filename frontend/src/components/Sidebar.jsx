import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaBars } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoAnalytics } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { IoLogIn } from "react-icons/io5";
import { RiUserReceivedFill } from "react-icons/ri";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <IoAnalytics />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <FiSettings />,
  },
];

const routes_authentication = [
  {
    path: "/login",
    name: "Login",
    icon: <IoLogIn />,
  },
  {
    path: "/signup",
    name: "Signup",
    icon: <RiUserReceivedFill />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      padding: 0,
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "80%",
      padding: "0.5rem 1rem",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      animate={{
        width: isOpen ? "20rem" : "4.5rem",
        transition: { duration: 0.5, type: "spring", damping: 9 },
      }}
      className="sidebar"
    >
      <div className="top_section">
        {isOpen && (
          <h1 className="logo">
            <span>
              {" "}
              <BiPlusMedical />
            </span>
            <span>HMS</span>
          </h1>
        )}

        <div className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      <div className="search">
        <div className="search_icon">
          <BiSearch />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.input
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              className="search"
              type="text"
              placeholder="Search ..."
            />
          )}
        </AnimatePresence>
      </div>
      <div className="routes_container">
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="icon">{route.icon}</div>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={showAnimation}
                  className="link_text"
                >
                  {route.name}
                </motion.div>
              )}
            </NavLink>
          ))}
        </section>
        <section className="routes">
          {routes_authentication.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="icon">{route.icon}</div>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={showAnimation}
                  className="link_text"
                >
                  {route.name}
                </motion.div>
              )}
            </NavLink>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default Sidebar;
