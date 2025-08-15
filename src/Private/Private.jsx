import { Navigate, useLocation } from "react-router-dom";
import UseAuth from './../Hooks/useAuth';
import Spinar from "../Components/Loading/Spinar";

const Private = ({ children }) => {
   const location = useLocation();
   const { user, loading } = UseAuth();
   // console.log(location.pathname)
   if (loading) {
      return <Spinar />
   }
   if (user) {
      return children
   } else {
      return <Navigate to={'/signin'} state={location.pathname}></Navigate>
   }
};

export default Private;