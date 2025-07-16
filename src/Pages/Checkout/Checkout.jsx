import { useLoaderData } from "react-router";
import headingBackground from '../../assets/images/checkout/checkout.png'
const Checkout = () => {
   const checkedServices = useLoaderData();
   const submitHandler = (e) => {
      e.preventDefault();
      const form = e.target;
      const customerName = form.customerName.value;
      const serviceDate = form.serviceDate.value;
      const contactNumber = form.contactNumber.value;
      const emailAddress = form.emailAddress.value;
      const message = form.message.value;

      const orderData = {
         customerName,
         serviceDate,
         contactNumber,
         emailAddress,
         message,
      };

      console.log("Form submitted", orderData);
   }
   return (
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset">
         <div className="h-40 flex items-center justify-center bg-white mb-4 rounded-lg" style={{ backgroundImage: `url(${headingBackground})`, backgroundSize: 'cover', opacity: 0.9, backgroundPosition: 'center' }}>
            <div className="bg-gray-900/50 w-full h-full flex items-center justify-center text-white rounded-lg">
               <h1 className="font-semibold text-3xl">Services Details</h1>
            </div>
         </div>
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
                     />
                  </div>
                  <div>
                     <label className="label p-2">Service Date</label>
                     <input
                        type="date"
                        name="serviceDate"
                        placeholder="Service Date"
                        className="input bg-white input-bordered w-full"
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
                        maxLength={11}
                     />
                  </div>
                  <div>
                     <label className="label p-2">Email Address</label>
                     <input
                        type="email"
                        name="emailAddress"
                        placeholder="example@gmail.com"
                        className="input bg-white input-bordered w-full"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label p-2">Due Amount </label>
                     <input
                        defaultValue={checkedServices?.price}
                        readOnly
                        name="serviceCharge"
                        className="input  bg-white input-bordered w-full"
                        maxLength={11}
                     />
                  </div>
                  <div>
                     <label className="label p-2">Email Address</label>
                     <input type="checkbox" className="checkbox" />
                  </div>
               </div>
               <textarea
                  className="textarea bg-white textarea-bordered w-full min-h-[100px]"
                  placeholder="Your Message"
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