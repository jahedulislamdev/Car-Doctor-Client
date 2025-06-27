import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navbar = () => {
   const navLinks = <>
      <li><Link>Home</Link></li>
      <li><Link>About</Link></li>
      <li><Link>Services</Link></li>
      <li><Link>Blog</Link></li>
      <li><Link>Contact</Link></li>
   </>
   return (
      <div className="navbar bg-gray-50/90 text-black shadow-sm font-Onset md:px-6">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className=" opacity-60 lg:hidden me-2">
                  <HiOutlineMenuAlt3 className="size-5.5" />
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow uppercase">
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
            <Link className=" bg-orange-700 btn btn-sm border-0 md:btn-md shadow-none"> Appointment</Link>
         </div>
      </div>
   );
};

export default Navbar;