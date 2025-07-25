import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router';

const ServicesDashboard = () => {
   const services = useLoaderData()
   console.log(services);

   return (
      <div className='bg-white text-gray-800'>
         <div className="breadcrumbs text-sm flex items-center">
            <ul>
               <li><a>Dashboard</a></li>
               <li><a>All Service</a></li>
            </ul>
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
                     services.map((service, idx) => (
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
                                 <button className='bg-red-500 text-white p-1 rounded cursor-pointer'><MdDelete className='size-5' /></button>
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