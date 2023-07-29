import "./App.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  Dashboard  from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Analytics from "./pages/Analytics"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
      </Sidebar>
    </Router>
    </>
  )
}

export default App