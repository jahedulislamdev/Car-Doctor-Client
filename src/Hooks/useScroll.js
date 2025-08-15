import { useEffect } from "react";
import { useLocation } from "react-router";

const UseScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location]);
};

export default UseScrollToTop;
