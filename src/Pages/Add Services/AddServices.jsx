import { useState } from "react";
import headingBackground from '../../assets/images/checkout/checkout.png';
import { MdDelete } from "react-icons/md";

const AddServices = () => {
   const [facilities, setFacilities] = useState([]);
   const [facilityName, setFacilityName] = useState('');
   const [facilityDetails, setFacilityDetails] = useState('');

   const addFacility = () => {
      if (facilityName && facilityDetails) {
         setFacilities([...facilities, { name: facilityName, details: facilityDetails }]);
         setFacilityName('');
         setFacilityDetails('');
      }
   };

   const removeFacility = (index) => {
      const updated = facilities.filter((_, i) => i !== index);
      setFacilities(updated);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.serviceName.value;
      const price = form.servicePrice.value;
      const shortDescription = form.shortText.value;
      const img = form.img.value;

      const newService = {
         title,
         img,
         price,
         shortDescription,
         facility: facilities,
      };

      console.log("New Service Added", newService);
      fetch("http://localhost:5000/services", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newService)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged === true) {
               alert("New Service Added Successfully!")
            }
         })
         .catch(err => console.error(err))
   };

   return (
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset">
         <div className="h-40 flex items-center justify-center bg-white mb-4 rounded-lg" style={{ backgroundImage: `url(${headingBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
         <div className="p-10 mt-6 max-w-4xl mx-auto bg-gray-100 rounded-lg border border-gray-400/30">
            <form onSubmit={submitHandler} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label font-semibold p-2"> Name *</label>
                     <input type="text" name="serviceName" required placeholder=" Service Name" className="input bg-white input-bordered w-full" />
                  </div>
                  <div>
                     <label className="label font-semibold p-2">Service price *</label>
                     <input type="number" required name="servicePrice" placeholder=" Service Price" className="input bg-white input-bordered w-full" />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label font-semibold p-2">Short Description *</label>
                     <input type="text" required name="shortText" placeholder=" Short Services Description" className="input bg-white input-bordered w-full" maxLength={50} />
                  </div>
                  <div>
                     <label className="label font-semibold p-2">Image *</label>
                     <input type="url" required name="img" placeholder="https://" className="input bg-white input-bordered w-full" />
                  </div>
               </div>


               {/* Facility inputs */}
               <div className="border border-gray-300 p-4 rounded bg-gray-100">
                  <label className="label p-2 font-semibold">Facilities</label>
                  <div className="flex justify-center items-center gap-4">
                     <input
                        type="text"
                        value={facilityName}
                        onChange={(e) => setFacilityName(e.target.value)}
                        placeholder=" Facility Name"
                        className="input bg-white input-bordered w-full"
                     />
                     <input
                        type="text"
                        value={facilityDetails}
                        onChange={(e) => setFacilityDetails(e.target.value)}
                        placeholder=" Facility Details"
                        className="input bg-white input-bordered w-full"
                     />
                     <button type="button" onClick={addFacility} className="text-nowrap cursor-pointer bg-orange-500 hover:bg-orange-700 transition-colors duration-200 text-white px-4 py-2 rounded">
                        + Add Facility
                     </button>
                  </div>

                  {/* Display added facilities */}
                  {facilities.length > 0 && (
                     <ul className="mt-4 space-y-2">
                        {facilities.map((item, index) => (
                           <li key={index} className="flex justify-between items-center bg-gray-200 p-2 rounded">
                              <div>
                                 <strong>{item.name}</strong>: {item.details}
                              </div>
                              <button onClick={() => removeFacility(index)} className="text-red-600 text-sm"><MdDelete className="size-6" /></button>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>

               <textarea className="textarea bg-white textarea-bordered w-full min-h-[100px]" placeholder="Product Description" name="description" />

               <button className="w-full bg-orange-700 hover:bg-orange-800 transition-colors duration-300 text-white p-3 cursor-pointer rounded">Add</button>
            </form>
         </div>
      </div>
   );
};

export default AddServices;
