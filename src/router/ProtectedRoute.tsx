import { Navigate, Outlet, useLocation } from "react-router-dom";

type AuthenticatedUser ={token:string}

export const ProtectedRoute: React.FC<{user: AuthenticatedUser}> = ({ user }) => {
    const location = useLocation();
    return user !=null ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
  };