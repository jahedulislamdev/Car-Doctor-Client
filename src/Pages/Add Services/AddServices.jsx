import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

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
      Swal.fire({
         title: "Are you sure?",
         showCancelButton: true,
         confirmButtonText: "Delete",
         confirmButtonColor: '#d33',
      }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            const updated = facilities.filter((_, i) => i !== index);
            setFacilities(updated);
            Swal.fire("Deleted!", "", "success");
         }
      });
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
      <div className="bg-white text-gray-900 font-Onset">
         <div className="breadcrumbs text-sm flex items-center">
            <ul>
               <li><a>Dashboard</a></li>
               <li><a>Add New Service</a></li>
            </ul>
         </div>
         <div className="p-4 mt-4 md:max-w-4xl md:mx-auto bg-gray-100 rounded-lg border border-gray-400/30">
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
                  <div className="md:flex justify-center items-center gap-4 space-y-3">
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
                              <button type="button" onClick={() => removeFacility(index)} className="text-red-600 text-sm"><MdDelete className="size-6" /></button>
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
