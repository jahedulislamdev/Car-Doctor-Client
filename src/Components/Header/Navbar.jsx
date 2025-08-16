import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg'
import UseAuth from "../../Hooks/useAuth";

const Navbar = () => {
   const { user, signOutUser } = UseAuth();
   const navigate = useNavigate();
   // nav Links
   const navLinks =
      <>
         <li><NavLink to={'/'}>Home</NavLink></li>
         <li><NavLink to={'/all-service'}>Services</NavLink></li>
         {user ?
            <>
               <li><NavLink to={"/my-bookings"}>My Bookings</NavLink></li>
               <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
               <li><button onClick={() => signOutUser(navigate)}>Logout</button></li>
            </>
            : <li><NavLink to={'/signin'}>Login</NavLink></li>}
      </>
   return (
      <div className="navbar bg-white text-black shadow-sm font-Onset md:px-6 sticky top-0 z-50">
         <div className="navbar-start">
            <div className="drawer drawer-end md:hidden">
               <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button "><HiOutlineMenuAlt3 className="size-6" /></label>
               </div>
               <div className="drawer-side">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                  <div className="menu bg-white min-h-full w-80">
                     <img className="w-16 mx-auto" src={logo} alt="Car Doctor" />
                     <ul className=" p-4 space-y-4">
                        {navLinks}
                     </ul>
                  </div>
               </div>
            </div>
            <Link to={'/'} ><img className="w-10 md:w-12" src={logo} alt="" /></Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 capitalize text-lg space-x-5">
               {navLinks}
            </ul>
         </div>
         <div className="navbar-end md:space-x-5 space-x-2 ">
            {/* <Link><IoBagRemoveOutline className="size-5" /></Link> */}
            <Link to={'/all-service'} className="bg-[#e17f2996] btn btn-sm border-0 md:btn-md shadow-none text-black"> Appointment</Link>
         </div>
      </div>
   );
};

export default Navbar;