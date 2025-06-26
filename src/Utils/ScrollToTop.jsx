import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
   const path = useLocation();
   useEffect(() => {
      scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }, [path])
   return null;
};

export default ScrollToTop;