import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import ScrollToTop from "../Utils/ScrollToTop";
import { Toaster } from "react-hot-toast";

const Root = () => {
   return (
      <div>
         <ScrollToTop />
         <Navbar />
         <Outlet />
         <Footer />
         <Toaster position="top-right" />
      </div>
   );
};

export default Root;