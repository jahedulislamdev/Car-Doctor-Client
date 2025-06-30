import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // ✅ Correct import for React Router v6+
import loginBanner from '../../assets/images/login/login.svg'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
const Login = () => {
   const [showPass, setShowPass] = useState(false)
   return (
      <div className="md:min-h-screen pt-3 md:pt-0 flex justify-center md:gap-x-10 items-center bg-gray-100 text-black px-4 font-Onset">
         <img className="w-[400px] hidden md:block" src={loginBanner} alt="" />
         <div className="bg-white p-8 rounded-xl w-full max-w-md space-y-6">
            <h2 className="text-3xl font-semibold text-center text-orange-400">Login</h2>

            <form className="space-y-5">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                     type="email"
                     className="w-full px-4 py-2 rounded focus:outline-0 border border-gray-400"
                     placeholder="Enter your email"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="join w-full border border-gray-400 px-1 rounded">
                     <input
                        type="password"
                        className="join-item w-full px-4 py-2 rounded-md focus:outline-0"
                        placeholder="Enter your password"
                        required
                     />
                     <button onClick={() => setShowPass(!showPass)} className="join-item cursor-pointer" type="button">{showPass ? <IoMdEye className="size-6" /> : <IoMdEyeOff className="size-6" />}</button>
                  </div>
               </div>

               <div className="flex items-center justify-between text-sm text-gray-600">
                  <label className="flex items-center">
                     <input type="checkbox" className="checkbox checkbox-sm mr-2 checkbox-warning" />
                     Remember Me
                  </label>
                  <a href="#" className="text-orange-700">
                     Forgot Password?
                  </a>
               </div>

               <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition duration-300"
               >
                  Sign In
               </button>

               <div className="text-center text-gray-500 text-sm">Or sign in with</div>
            </form>

            <div className="flex justify-center gap-4">
               <button className="p-3 bg-gray-200 rounded-full cursor-pointer">
                  <FaFacebook className="text-xl text-primary" />
               </button>
               <button className="p-3 bg-gray-200 rounded-full cursor-pointer">
                  <FaLinkedin className="text-xl" />
               </button>
               <button className="p-3 bg-gray-200 rounded-full cursor-pointer">
                  <FcGoogle className="text-xl" />
               </button>
            </div>

            <p className="text-sm text-center text-gray-600 pt-2">
               Don't have an account?{" "}
               <Link to="/signup" className="text-orange-600 font-semibold">
                  Sign Up
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Login;
