import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoute = ({ role, children }) => {
  const auth = getAuth(); // Initialize Firebase Authentication
  const currentRole = localStorage.getItem("role");

  // Check if the user is authenticated
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  // Check for role-based access
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
