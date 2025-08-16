import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Provider/context";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Spinar from "../../Components/Loading/Spinar";

const Bookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([]);
   const [loading, setLoading] = useState(true);
   const url = `/bookings/${user?.email}`;
   const axiosSecure = useAxiosSecure();

   useEffect(() => {
      if (!user?.email) return;
      setLoading(true);
      axiosSecure
         .get(url)
         .then((res) => setBookings(res.data))
         .catch((err) => console.error(err))
         .finally(() => setLoading(false));
   }, [url, user?.email, axiosSecure]);

   return (
      <div className="bg-gray-50 min-h-screen py-10">
         <div className="container mx-auto px-4">
            {/* Page Title */}
            <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
               My Bookings
            </h2>

            {/* Loading State */}
            {loading && (
               <div className="flex justify-center text-black items-center min-h-[300px]">
                  <Spinar />
               </div>
            )}

            {/* Bookings List */}
            {!loading && bookings?.length > 0 && (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {bookings.map((booking, idx) => (
                     <div
                        key={booking._id}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                     >
                        {/* Service Name */}
                        <h3 className=" badge bg-red-900 badge-sm"><span className="font-semibold">Order: </span>#0ATX{idx + 1}</h3>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                           {booking.serviceName}
                        </h3>

                        {/* Info */}
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                           <span className="flex items-center gap-2">📞 {booking.contactNumber}</span>
                           {booking.serviceCharge && (
                              <span className="flex items-center gap-2">
                                 💰 {booking.serviceCharge} ৳
                              </span>
                           )}
                           {booking.date && (
                              <span className="flex items-center gap-2">📅 {booking.date}</span>
                           )}
                        </div>

                        {/* Optional message */}
                        {booking.message && (
                           <p className="mt-3 text-gray-500 text-sm italic border-l-4 border-gray-200 pl-3">
                              “{booking.message}”
                           </p>
                        )}

                        {/* Status Badge */}
                        {booking.status && (
                           <span
                              className={`mt-4 inline-block px-4 py-1 text-xs font-semibold rounded-full ${booking.status === "Confirmed"
                                 ? "bg-green-100 text-green-700"
                                 : booking.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                                 }`}
                           >
                              {booking.status}
                           </span>
                        )}
                     </div>
                  ))}
               </div>
            )}

            {/* Empty State */}
            {!loading && bookings?.length === 0 && (
               <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                  <div className="text-6xl mb-3">📭</div>
                  <p className="text-xl text-gray-600 font-medium">
                     You haven’t booked any service yet!
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                     Once you make a booking, it will appear here.
                  </p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Bookings;
