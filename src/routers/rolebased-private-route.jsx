import { useAuth } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../dashboard/dashbaord-layout";

function RoleBasedPrivateRoute({ requiredRole }) {
  const { user, loading } = useAuth();


  if (loading) {
    return <div>Loading...</div>; // 🟢 Show loading until authentication completes
  }

  console.log("User State:", user);

  if (!user || !user.isAuthenticated) { // 🟢 Ensure `user` exists
    console.log("User not authenticated, redirecting...");
    return <Navigate to="/login" />;
  }

  if (user.role !== requiredRole) { // 🟢 Ensure role matches
    console.log(`User role mismatch. Expected: ${requiredRole}, Got: ${user.role}`);
    return <Navigate to="/" />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default RoleBasedPrivateRoute;
