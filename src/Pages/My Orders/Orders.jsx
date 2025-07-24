import { useLoaderData } from 'react-router';
import { MdDelete } from 'react-icons/md';

const Orders = () => {
   const orderList = useLoaderData();
   console.log(orderList);
   return (
      <div className='bg-white text-gray-800'>
         <h1 className="font-semibold text-3xl text-center py-4">Manage your Orders</h1>
         {/* Orders */}

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
                     orderList.map((order) => (
                        <tr key={order._id} className='hover:bg-gray-100 transition duration-300'>
                           <td className='uppercase'>{order._id.slice(-5)}</td>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask rounded-lg h-20 w-20">
                                       <img
                                          src={order.serviceImg}
                                          alt="service Img" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="text-sm opacity-50 uppercase">{order.customerName}</div>
                                    <div className="text-sm ">{order.serviceDate}</div>
                                    <div className="font-bold badge badge-ghost badge-sm">{order.serviceName}</div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="text-sm opacity-90">{order.contactNumber}</div>
                           </td>
                           <td>{<div className="text-sm opacity-90">${order.serviceCharge}</div>}</td>
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

export default Orders;