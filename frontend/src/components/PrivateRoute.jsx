import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const isAuth = useSelector((store) => store.authReducer.isAuth);
  
  console.log("isAuth",isAuth)
   
  return isAuth ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
