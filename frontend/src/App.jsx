import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ResetPassowrd from "./components/auth/ResetPassowrd";
import ResetPassowrdConfirmation from "./components/auth/ResetPassowrdConfirmation";
import Activate from "./components/auth/Activate";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hoc/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            {/* Authentication */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/reset_password" element={<ResetPassowrd />} />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPassowrdConfirmation />}
            />
            <Route exact path="/activate/:uid/:token" element={<Activate />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};
export default App;
