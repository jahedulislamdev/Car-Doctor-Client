import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Provider/context";

const Private = ({ children }) => {
   const location = useLocation();
   const { user } = useContext(AuthContext);
   // console.log(location.pathname)
   if (user) {
      return children
   } else {
      return <Navigate to={'/signin'} state={location.pathname}></Navigate>
   }
};

export default Private;