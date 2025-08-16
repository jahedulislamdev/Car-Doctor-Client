import axios from 'axios';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const ServicesDashboard = () => {
   const services = useLoaderData();
   const [avilableServices, setAvilableServices] = useState(services);
   const handleDeleteService = (serviceId) => {
      Swal.fire({
         title: "Are you sure?",
         showCancelButton: true,
         confirmButtonText: "Delete",
         confirmButtonColor: '#d33',
      }).then((result) => {
         if (result.isConfirmed) {
            axios.delete(`https://car-doctor-server-2k6l.onrender.com/service/${serviceId}`)
               .then(res => res.data).then(data => {
                  if (data.deletedCount > 0) {
                     setAvilableServices(prev => prev.filter(s => s._id !== serviceId));
                     Swal.fire({
                        title: "Order Deleted Successfully!",
                        icon: "success"
                     })
                  }
               })
         }
      });
   }

   return (
      <div className='bg-white text-gray-800'>
         <div className="breadcrumbs text-sm flex justify-between items-center">
            <ul>
               <li><a>Dashboard</a></li>
               <li><a>All Service</a></li>
            </ul>
            <p className='text-xs px-3 py-1 rounded-xl bg-orange-800 text-white'>Total Avilable Service ( {services.length} )</p>
         </div>
         <div className="overflow-x-auto py-3">
            <table className="table">
               {/* head */}
               <thead className=' text-gray-800 shadow'>
                  <tr>
                     <th>SE</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Action</th>
                     <th className=''>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     avilableServices?.map((service, idx) => (
                        <tr key={service._id} className='hover:bg-gray-100 transition duration-300'>
                           <td className='uppercase'>{idx + 1}</td>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask rounded-lg h-20 w-20">
                                       <img
                                          src={service.img}
                                          alt="service Img" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="text-sm opacity-50 uppercase">{service.customerName}</div>
                                    <div className="text-sm ">{service.serviceDate}</div>
                                    <div className="font-bold ">{service.title}</div>
                                 </div>
                              </div>
                           </td>
                           <td>{<div className="text-sm opacity-90">${service.price}</div>}</td>

                           <th>
                              <div className='flex items-center gap-2'>
                                 <Link to={`/dashboard/services/edit/${service._id}`} className="bg-black text-white p-1 rounded cursor-pointer"><TbEdit className='size-5' /></Link>
                                 <button onClick={() => handleDeleteService(service._id)} type='button' className='bg-red-500 text-white p-1 rounded cursor-pointer'><MdDelete className='size-5' /></button>
                              </div>
                           </th>
                           <th>
                              <select name="status" className='border p-1 rounded bg-white'>
                                 <option value="in-progress">Active</option>
                                 <option value="pending">Disable</option>
                              </select>
                           </th>
                        </tr>
                     ))
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ServicesDashboard;