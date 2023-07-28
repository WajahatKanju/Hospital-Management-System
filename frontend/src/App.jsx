import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  Dashboard  from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Analytics from "./pages/Analytics"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App