import { useContext } from "react";
import AuthContext from "../Provider/context";
const UseAuth = () => {
    const authDetail = useContext(AuthContext);
    return authDetail;
};
export default UseAuth;
