import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import AuthContext from "../../Provider/context";

const Navbar = () => {
   const { user, signOutUser } = useContext(AuthContext)
   const navLinks = <>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/all-service'}>Services</Link></li>
      <li><Link to={"/dashboard"}>Dashboard</Link></li>
      {user ? <li><button onClick={signOutUser}>Logout</button></li>
         : <li><Link to={'/signin'}>Login</Link></li>}
   </>
   return (
      <div className="navbar bg-gray-50/90 text-black shadow-sm font-Onset md:px-6 sticky top-0 z-50">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className=" opacity-60 lg:hidden me-2">
                  <HiOutlineMenuAlt3 className="size-5.5" />
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-52 p-2 shadow uppercase">
                  {navLinks}
               </ul>
            </div>
            <Link to={'/'} ><img className="w-10 md:w-12" src={logo} alt="" /></Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 capitalize text-lg space-x-5">
               {navLinks}
            </ul>
         </div>
         <div className="navbar-end md:space-x-5 space-x-2 ">
            <Link><IoBagRemoveOutline className="size-5" /></Link>
            <Link><IoIosSearch className="size-5" /></Link>
            <Link to={'/all-service'} className="bg-[#e17f2996] btn btn-sm border-0 md:btn-md shadow-none text-black"> Appointment</Link>

         </div>
      </div>
   );
};

export default Navbar;