import { Navigate } from "react-router-dom";

const PrivateRoute = ({ role, children }) => {
  const currentRole = localStorage.getItem("role");

  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  if (role && currentRole !== role) {
    return currentRole === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/dashboardPage" />
    );
  }

  return children;
};

export default PrivateRoute;
