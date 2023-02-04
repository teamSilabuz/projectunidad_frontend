import { Navigate, Outlet, useLocation } from "react-router-dom";

type AuthenticatedUser ={token:string}

export const PublicRoute: React.FC<{user: AuthenticatedUser}> = ({ user }) => {
    const location = useLocation();  
    return user !=null ? <Navigate to="/home" replace state={{ from: location }}/>  : <Outlet /> ;
  };
