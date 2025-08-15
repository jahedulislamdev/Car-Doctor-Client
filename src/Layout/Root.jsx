import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import { Toaster } from "react-hot-toast";
import UseScrollToTop from "../Hooks/useScroll";


const Root = () => {
   return (
      <div>
         <UseScrollToTop />
         <Navbar />
         <Outlet />
         <Footer />
         <Toaster position="top-right" />
      </div>
   );
};

export default Root;