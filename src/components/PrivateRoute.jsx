import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoute = ({ role, children }) => {
  const auth = getAuth(); // Initialize Firebase Authentication
  const currentRole = localStorage.getItem("role");

  // Check if the user is authenticated
  const isAuthenticated = auth.currentUser;

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If role is provided and doesn't match, redirect accordingly
  if (role && currentRole !== role) {
    return currentRole === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/dashboardPage" />
    );
  }

  return children; // Render the children if all conditions are met
};

export default PrivateRoute;
