import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});
const useAxiosSecure = () => {
    const { autoLogout } = UseAuth();
    const navigate = useNavigate();
    useEffect(() => {
        instance.interceptors.response.use(
            (res) => {
                return res;
            },
            (err) => {
                if (
                    err.response.status === 401 ||
                    err.response.status === 403
                ) {
                    console.log("unauthorized user");
                    autoLogout(navigate);
                }
                console.log(err.response);
            },
        );
    }, [navigate, autoLogout]);
    return instance;
};

export default useAxiosSecure;
