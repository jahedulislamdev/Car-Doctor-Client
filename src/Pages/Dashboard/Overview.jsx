import React from "react";
import {
   FaUsers,
   FaBoxOpen,
   FaDollarSign,
   FaClipboardList,
} from "react-icons/fa";

const Overview = () => {
   const summaryData = [
      {
         label: "Total Orders",
         value: 1245,
         icon: <FaClipboardList className="text-3xl text-blue-500" />,
         color: "bg-blue-100",
      },
      {
         label: "Total Users",
         value: 532,
         icon: <FaUsers className="text-3xl text-purple-500" />,
         color: "bg-purple-100",
      },
      {
         label: "Total Services",
         value: 76,
         icon: <FaBoxOpen className="text-3xl text-green-500" />,
         color: "bg-green-100",
      },
      {
         label: "Total Revenue",
         value: "$9,300",
         icon: <FaDollarSign className="text-3xl text-yellow-500" />,
         color: "bg-yellow-100",
      },
   ];

   const recentOrders = [
      { id: "ORD-1001", user: "John Doe", total: "$120", status: "Completed" },
      { id: "ORD-1002", user: "Jane Smith", total: "$75", status: "Pending" },
      { id: "ORD-1003", user: "Alice Lee", total: "$300", status: "Processing" },
   ];

   return (
      <div className="space-y-10">
         {/* Summary cards */}
         <div>
            <h2 className="md:text-2xl font-semibold text-gray-800 mb-4">📊 Overview Summary (Demo UI & Fake Data)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {summaryData.map((item, index) => (
                  <div
                     key={index}
                     className={`p-4 rounded-xl shadow hover:shadow-md transition-all duration-300 ${item.color}`}
                  >
                     <div className="flex items-center gap-4">
                        {item.icon}
                        <div>
                           <p className="text-lg font-bold text-gray-800">{item.value}</p>
                           <p className="text-sm text-gray-600">{item.label}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Placeholder Chart Section */}
         <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-medium mb-4 text-gray-700">📈 Weekly Orders Chart</h3>
            <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">
               {/* Placeholder for future charts like BarChart/LineChart */}
               [ Chart Coming Soon ]
            </div>
         </div>

         {/* Recent Orders Table */}
         <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-medium mb-4 text-gray-700">📦 Recent Orders</h3>
            <div className="overflow-x-auto">
               <table className="table table-zebra w-full text-sm">
                  <thead className="text-gray-600">
                     <tr className="text-left">
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600">
                     {recentOrders.map((order) => (
                        <tr key={order.id}>
                           <td>{order.id}</td>
                           <td>{order.user}</td>
                           <td>{order.total}</td>
                           <td>
                              <span
                                 className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === "Completed"
                                    ? "bg-green-100 text-green-700"
                                    : order.status === "Pending"
                                       ? "bg-yellow-100 text-yellow-700"
                                       : "bg-blue-100 text-blue-700"
                                    }`}
                              >
                                 {order.status}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Overview;
