import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const EditService = () => {
   const service = useLoaderData();
   console.log(service)
   const navigate = useNavigate()

   // State for facilities
   const [facilities, setFacilities] = useState([]);
   const [facilityName, setFacilityName] = useState('');
   const [facilityDetails, setFacilityDetails] = useState('');

   // add previously added facilities 
   useEffect(() => {
      if (service.facility) {
         setFacilities(service.facility)
      }
   }, [service.facility])

   // add facility function
   const addFacility = () => {
      if (facilityName && facilityDetails) {
         setFacilities([...facilities, { name: facilityName, details: facilityDetails }]);
         setFacilityName('');
         setFacilityDetails('');
      }
   };
   // remove facility function
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
      e.preventDefault();
      const form = e.target;
      const title = form.serviceName.value;
      const price = form.servicePrice.value;
      const shortDescription = form.shortText.value;
      const img = form.img.value;
      const description = form.description.value

      const updatedService = {
         title,
         img,
         price,
         shortDescription,
         facility: facilities,
         description
      };
      console.log(updatedService);
      fetch(`http://localhost:5000/services/edit/${service._id}`, {
         method: "PUT",
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(updatedService),
      }).then(res => res.json()).then(data => {
         if (data.modifiedCount > 0) {
            toast.success("Service updated successfully!");
            navigate('/dashboard/services');
         }
      })
         .catch(err => console.error(err));
   }
   return (
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset">
         <div className="breadcrumbs text-sm flex items-center">
            <ul>
               <Link to={"/dashboard/services"}>All Service</Link>
               <li>Edit - {service.title}</li>
            </ul>
         </div>
         <div className="p-5 mt-6 max-w-4xl mx-auto bg-gray-100 rounded-lg border border-gray-400/30">
            <form onSubmit={submitHandler} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label font-semibold p-2"> Name *</label>
                     <input type="text" name="serviceName" required defaultValue={service.title} className="input bg-white input-bordered w-full" />
                  </div>
                  <div>
                     <label className="label font-semibold p-2">Service price *</label>
                     <input type="number" required name="servicePrice" defaultValue={service.price} className="input bg-white input-bordered w-full" />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="label font-semibold p-2">Short Description *</label>
                     <input type="text" name="shortText" placeholder="Short Message" defaultValue={service.shortText} className="input bg-white input-bordered w-full" maxLength={50} />
                  </div>
                  <div>
                     <label className="label font-semibold p-2">Image *</label>
                     <input type="url" required name="img" defaultValue={service.img} className="input bg-white input-bordered w-full" />
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
                     <button type="button" onClick={addFacility} className="text-nowrap cursor-pointer bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 text-white px-4 py-2 rounded">
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

               <textarea required className="textarea bg-white textarea-bordered w-full min-h-[100px]" defaultValue={service.description} name="description" />

               <button className="w-full bg-cyan-700 hover:bg-cyan-800 transition-colors duration-300 text-white p-3 cursor-pointer rounded">Update</button>
            </form>
         </div>
      </div>
   );
};

export default EditService;