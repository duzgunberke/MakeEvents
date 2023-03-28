import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStore } from "../stores/store";

export default function RequireAuth() {
  const { userStore: {isLoggedIn} } = useStore();
  const location = useLocation();

    if (!isLoggedIn) {                                                          // maybe in if statement include && location.pathname !== '/login' 
              return <Navigate to='/' state={{from: location}} />
    }
    return <Outlet />

}