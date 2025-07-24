import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router';

const ServicesDashboard = () => {
   const services = useLoaderData();
   return (
      <div className='bg-white p-3 text-gray-800'>
         <h1 className="font-semibold text-3xl text-center py-4">Manage your Services</h1>
         <div className="overflow-x-auto py-10">
            <table className="table">
               {/* head */}
               <thead className=' text-gray-800 shadow'>
                  <tr>
                     <th>ID/Code</th>
                     <th>Name</th>
                     <th>Contact Number</th>
                     <th>Due Amount</th>
                     <th>Action</th>
                     <th className=''>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     services.map((service) => (
                        <tr key={service._id} className='hover:bg-gray-100 transition duration-300'>
                           <td className='uppercase'>{service._id.slice(-5)}</td>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask rounded-lg h-20 w-20">
                                       <img
                                          src={service.serviceImg}
                                          alt="service Img" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="text-sm opacity-50 uppercase">{service.customerName}</div>
                                    <div className="text-sm ">{service.serviceDate}</div>
                                    <div className="font-bold badge badge-ghost badge-sm">{service.serviceName}</div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="text-sm opacity-90">{service.contactNumber}</div>
                           </td>
                           <td>{<div className="text-sm opacity-90">${service.serviceCharge}</div>}</td>
                           <th>
                              <div className='flex items-center gap-2'>
                                 <button className="btn btn-xs">Details</button>
                                 <button className='bg-red-500 text-white p-1 rounded cursor-pointer'><MdDelete className='size-5' /></button>
                              </div>
                           </th>
                           <th>
                              <select name="status" className='border p-1 rounded bg-white'>
                                 <option value="pending">Pending</option>
                                 <option value="in-progress">In Progress</option>
                                 <option value="completed">Completed</option>
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