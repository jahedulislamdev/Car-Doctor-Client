import headingBackground from '../../assets/images/checkout/checkout.png'

const AddServices = () => {
   const submitHandler = (e) => {
      e.preventDefault();
      const form = e.target;
      const serviceName = form.serviceName.value;
      const serviceCharge = form.serviceCharge.value;
      const serviceDetails = form.serviceDetails.value;

      const newService = {
         title: serviceName,
         charge: serviceCharge,
         details: serviceDetails,
      };

      console.log("New Service Added", newService);
   }
   return (
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset">
         <div className="h-40 flex items-center justify-center bg-white mb-4 rounded-lg" style={{ backgroundImage: `url(${headingBackground})`, backgroundSize: 'cover', opacity: 0.9, backgroundPosition: 'center' }}>
            <div className="bg-gray-900/70 w-full h-full flex items-center justify-center text-white rounded-lg">
               <h1 className="font-semibold text-3xl">Add New Service</h1>
            </div>
         </div>
         <div className="breadcrumbs text-sm flex justify-center items-center">
            <ul>
               <li><a>Services</a></li>
               <li><a>Add New Service</a></li>
            </ul>
         </div>
         <div className="p-10  mt-6 max-w-4xl mx-auto bg-gray-100 rounded-lg border border-gray-400/30">
            <form onSubmit={submitHandler} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label p-2"> Name</label>
                     <input
                        type="text"
                        name="serviceName"
                        placeholder="Service Name"
                        className="input bg-white input-bordered w-full"
                     />
                  </div>
                  <div>
                     <label className="label p-2">Service price</label>
                     <input
                        type="number"
                        name="servicePrice"
                        placeholder="Service Price"
                        className="input bg-white input-bordered w-full"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label p-2">Short Text</label>
                     <input
                        type="text"
                        name="shortText"
                        placeholder="Short Text"
                        className="input  bg-white input-bordered w-full"
                        maxLength={11}
                     />
                  </div>
                  <div>
                     <label className="label p-2">Services Type</label>
                     <input
                        type="text"
                        name="serviceType"
                        placeholder="Service Type"
                        className="input bg-white input-bordered w-full"
                     />
                  </div>
               </div>
               <textarea
                  className="textarea bg-white textarea-bordered w-full min-h-[100px]"
                  placeholder="Product Description"
                  name="description"
               >

               </textarea>
               <button className="w-full bg-orange-700 hover:bg-orange-800 transition-colors duration-300 text-white p-3 cursor-pointer rounded">Add</button>
            </form>
         </div>
      </div >
   );
};

export default AddServices;