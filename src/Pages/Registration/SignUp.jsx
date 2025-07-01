import { Link, useNavigate } from "react-router-dom";
import loginBanner from '../../assets/images/login/login.svg'
import { useContext } from "react";
import AuthContext from "../../Provider/context";
import toast from "react-hot-toast";

const SignUp = () => {
   const { registrationWithEmail, setUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const name = e.target.username.value;
      const password = e.target.password.value;
      const email = e.target.email.value;
      const registerInfo = { name, email, password }
      registrationWithEmail(email, password)
         .then((res) => {
            setUser(res.user)
            toast.success("registration successfully")
            console.log("registration successfully", res.user)
            navigate('/signin')
         })
         .catch(err => console.log(err.code))

      console.log(registerInfo);
   }
   return (
      <div className="md:min-h-screen pt-3 md:pt-0 flex justify-center md:gap-x-10 items-center bg-gray-100 text-black font-sans px-4">
         <img className="w-[400px] hidden md:block" src={loginBanner} alt="" />
         <div className="bg-white p-8 rounded-xl w-full max-w-md space-y-6">
            <h2 className="text-3xl font-semibold text-center text-orange-400">Registration</h2>
            <form onSubmit={handleFormSubmit} className="space-y-5">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                     type="text"
                     name="username"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                     placeholder="Enter your Name"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                     type="email"
                     name="email"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                     placeholder="Enter your email"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                     type="password"
                     name="password"
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                     placeholder="Enter your password"
                     required
                  />
               </div>

               <div className="text-sm text-gray-600">
                  <label className="flex items-center">
                     <input name="terms" type="checkbox" required className="checkbox checkbox-sm mr-2 checkbox-warning" />
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