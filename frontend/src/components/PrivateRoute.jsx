import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getlocalSt } from "../utils/localStorage";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const isAuth = getlocalSt("isAuth")
  
  console.log("isAuth",isAuth)
   
  return isAuth ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
