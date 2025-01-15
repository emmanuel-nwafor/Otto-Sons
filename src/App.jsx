import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/DashboardPage"; // Example for another route

function App() {
  const location = useLocation();

  return (
    <Router>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={500} classNames="fade">
          <Routes location={location}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
