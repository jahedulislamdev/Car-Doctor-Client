import { Link, useLoaderData } from "react-router";

const AllService = () => {
   const services = useLoaderData();

   return (
      <div className="max-w-7xl mx-auto px-2 md:px-12 py-12 bg-gray-100">
         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">💼 Explore Our Services</h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {
               services?.map(service => (
                  <Link
                     to={`/service/${service._id}`}
                     key={service._id}
                     className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500 bg-white"
                  >
                     <div className="overflow-hidden">
                        <img
                           src={service.img}
                           alt={service.title}
                           className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-700 "
                        />
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-5 text-white group-hover:backdrop-blur-sm duration-700 rounded-t-3xl">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        <p className="text-sm line-clamp-2 opacity-80">{service.description}</p>
                        <p className="mt-2 text-lg font-bold text-orange-400">${service.price}</p>
                     </div>
                  </Link>
               ))
            }
         </div>
      </div>
   );
};

export default AllService;
