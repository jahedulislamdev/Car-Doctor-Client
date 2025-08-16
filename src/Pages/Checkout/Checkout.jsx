import { useLoaderData, useNavigate } from "react-router";
import headingBackground from '../../assets/images/checkout/checkout.png'
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../../Provider/context";
import axios from "axios";
const Checkout = () => {
   const { user } = useContext(AuthContext)
   const checkedServices = useLoaderData();
   const navigate = useNavigate()
   const submitHandler = (e) => {
      e.preventDefault();
      const form = e.target;
      const customerName = form.customerName.value.trim();
      const serviceDate = form.serviceDate.value;
      const contactNumber = form.contactNumber.value.trim();
      const emailAddress = form.emailAddress.value.trim();
      const message = form.message.value.trim();
      const serviceName = form.services_name.value;
      const serviceCharge = form.serviceCharge.value;
      const serviceImg = checkedServices.img;

      // Validation checks
      if (!/^01\d{9}$/.test(contactNumber)) return toast.error("Valid 11-digit contact number required (e.g., 018XXXXXXXX)");

      const orderData = {
         customerName,
         serviceDate, // service date is not responding (you have to fix it later)
         contactNumber,
         emailAddress,
         message,
         serviceName,
         serviceCharge,
         serviceImg
      };

      axios.post("https://car-doctor-server-2k6l.onrender.com/orders", orderData, { withCredentials: true })
         .then(res => res.data)
         .then(data => {
            if (data.insertedId) {
               toast.success("Order placed successfully!");
               form.reset();
               navigate('/')
            } else {
               toast.error("Failed to place order. Try again.");
            }
         })
         .catch(err => {
            console.error(err);
            toast("🚨 Server error occurred!");
         });
   };
   const today = new Date().toISOString().split("T")[0];

   return (
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset">
         <h3 className="text-center text-xl font-semibold mb-5">Checkout Order</h3>
         <div className="breadcrumbs text-sm flex justify-center items-center">
            <ul>
               <li><a>Services</a></li>
               <li><a>Services Details</a></li>
               <li>{checkedServices?.title}</li>
            </ul>
         </div>
         <div className="p-10  mt-6 max-w-4xl mx-auto bg-gray-100 rounded-lg border border-gray-400/30">
            <form onSubmit={submitHandler} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label p-2">Name</label>
                     <input
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        className="input bg-white input-bordered w-full"
                        required
                     />
                  </div>
                  <div>
                     <label className="label p-2">Service Date</label>
                     <input
                        name="serviceDate"
                        placeholder={today}
                        className="input bg-white input-bordered w-full"
                        readOnly
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label p-2">Contact Number</label>
                     <input
                        type="number"
                        name="contactNumber"
                        placeholder="018XXXXXXXXX"
                        className="input  bg-white input-bordered w-full"
                        minLength={11}
                        maxLength={11}
                        required
                     />
                  </div>
                  <div>
                     <label className="label p-2">Email Address</label>
                     <input
                        name="emailAddress"
                        defaultValue={user?.email}
                        className="input bg-white input-bordered w-full"
                        required
                        readOnly
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label p-2">Service Name</label>
                     <input type="text" name="services_name" readOnly defaultValue={checkedServices?.title} className="input  bg-white input-bordered w-full" />
                  </div>
                  <div>
                     <label className="label p-2">Due Amount </label>
                     <input
                        defaultValue={checkedServices?.price}
                        readOnly
                        name="serviceCharge"
                        className="input  bg-white input-bordered w-full"
                     />
                  </div>
               </div>
               <textarea
                  className="textarea bg-white textarea-bordered w-full min-h-[100px]"
                  placeholder="Your Message (optional)"
                  name="message"
               >

               </textarea>
               <button className="w-full bg-orange-700 hover:bg-orange-800 transition-colors duration-300 text-white p-3 cursor-pointer rounded">Confirm Order</button>
            </form>
         </div>
      </div >
   );
};

export default Checkout;