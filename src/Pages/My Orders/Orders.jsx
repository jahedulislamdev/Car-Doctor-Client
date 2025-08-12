import { Link, useLoaderData } from 'react-router';
import { MdDelete } from 'react-icons/md';
import { PiEyeThin } from 'react-icons/pi';
import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';

const Orders = () => {
   const orderList = useLoaderData() || [];
   const [avilableOrders, setAvilableOrders] = useState(orderList);

   const handleDeleteOrder = (orderId) => {
      Swal.fire({
         title: "Are you sure?",
         showCancelButton: true,
         confirmButtonText: "Delete",
         confirmButtonColor: '#d33',
      }).then((result) => {
         if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/order/${orderId}`)
               .then(res => res.data).then(data => {
                  if (data.deletedCount > 0) {
                     setAvilableOrders(prev => prev.filter(o => o._id !== orderId));
                     Swal.fire({
                        title: "Order Deleted Successfully!"
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
               <li><Link to={'/dashboard'}>Dashboard</Link></li>
               <li><a>All Order</a></li>
            </ul>
            <p className='text-xs px-3 py-1 rounded-xl bg-orange-800 text-white'>Total Avilable Order ( {orderList.length} )</p>
         </div>
         <div className="overflow-x-auto py-3">
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
                  {avilableOrders?.length < 1 ?
                     <tr>
                        <td colSpan="7" className="text-center py-4 text-gray-500 text-xl font-medium">
                           Your order list is currently empty!
                        </td>
                     </tr> :
                     avilableOrders?.map((order) => (
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
                                    <div className="text-sm opacity-70 uppercase">{order.customerName}</div>
                                    <div className="text-sm opacity-50">{order.emailAddress}</div>
                                    <div className="font-bold badge badge-ghost badge-sm">{order.serviceName}</div>
                                    {/* <div className="text-sm ">{order.serviceDate}</div> */}
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="text-sm opacity-90">{order.contactNumber}</div>
                           </td>
                           <td>{<div className="text-sm opacity-90">${order.serviceCharge}</div>}</td>
                           <th>
                              <div className='flex items-center gap-2'>
                                 <button className="bg-gray-600 text-white cursor-pointer p-1 rounded shadow"><PiEyeThin className='size-5' /></button>
                                 <button onClick={() => handleDeleteOrder(order._id)} className='bg-red-500 text-white p-1 rounded cursor-pointer'><MdDelete className='size-5' /></button>
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