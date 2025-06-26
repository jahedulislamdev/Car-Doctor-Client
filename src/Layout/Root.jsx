import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import ScrollToTop from "../Utils/ScrollToTop";

const Root = () => {
   return (
      <>
         <ScrollToTop />
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default Root;