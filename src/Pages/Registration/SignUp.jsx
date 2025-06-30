import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // ✅ Correct import for React Router v6+
import loginBanner from '../../assets/images/login/login.svg'

const SignUp = () => {
   return (
      <div className="md:min-h-screen pt-3 md:pt-0 flex justify-center md:gap-x-10 items-center bg-gray-100 text-black font-sans px-4">
         <img className="w-[400px] hidden md:block" src={loginBanner} alt="" />
         <div className="bg-white p-8 rounded-xl w-full max-w-md space-y-6">
            <h2 className="text-3xl font-semibold text-center text-orange-400">Registration</h2>

            <form className="space-y-5">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                     type="text"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                     placeholder="Enter your Name"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                     type="email"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                     placeholder="Enter your email"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                     type="password"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                     placeholder="Enter your password"
                     required
                  />
               </div>

               <div className="text-sm text-gray-600">
                  <label className="flex items-center">
                     <input type="checkbox" className="checkbox checkbox-sm mr-2 checkbox-warning" />
                     Accept your <Link className="ms-1 text-orange-800"> Terms & Conditions</Link>
                  </label>

               </div>

               <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition duration-300"
               >
                  Sign In
               </button>
            </form>
            <p className="text-sm text-center text-gray-600">
               Don't have an account?{" "}
               <Link to="/signin" className="text-orange-600 font-semibold">
                  Sign In
               </Link>
            </p>
         </div>
      </div>
   );
};

export default SignUp;