import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Provider/context";

const Bookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([]);
   const [loading, setLoading] = useState(true);
   const url = `http://localhost:5000/bookings/${user?.email}`;

   useEffect(() => {
      if (!user?.email) return;

      setLoading(true);
      axios
         .get(url, { withCredentials: true })
         .then((res) => setBookings(res.data))
         .catch((err) => console.error(err))
         .finally(() => setLoading(false));
   }, [url, user?.email]);

   return (
      <div className="bg-white text-gray-800 container ">
         <h3 className="text-center text-3xl font-semibold py-4 text-gray-400">The orders you booked </h3>
         <div className="p-6 grid grid-cols-4 gap-2.5 ">
            {loading ? (
               <div className="text-center py-10 text-gray-500">⏳ Loading bookings...</div>
            ) : bookings?.length > 0 ? (
               bookings.map((booking) => (
                  <div
                     key={booking._id}
                     className="bg-gray-200 py-4 rounded-md px-3"
                  >

                     <h3 className="text-lg font-semibold text-gray-900">{booking.serviceName}</h3>
                     <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">📞 {booking.contactNumber}</span>
                        {booking.serviceCharge && (
                           <span className="flex items-center gap-1">
                              💰 {booking.serviceCharge} ৳
                           </span>
                        )}
                        {booking.date && (
                           <span className="flex items-center gap-1">📅 {booking.date}</span>
                        )}
                     </div>
                     {booking.message && (
                        <p className="mt-1 text-gray-500 text-sm">{booking.message}</p>
                     )}
                     {booking.status && (
                        <span
                           className={`mt-3 inline-block px-3 py-1 text-xs font-medium rounded-full ${booking.status === "Confirmed"
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
               ))
            ) : (
               <div className="text-center text-gray-500 h-90 flex justify-center items-center text-xl opacity-70">
                  📭 You haven’t booked any service yet.
               </div>
            )}
         </div>
      </div>
   );
};

export default Bookings;
