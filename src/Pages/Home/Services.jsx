import { Link, useLoaderData } from 'react-router-dom'
const Services = () => {
   const services = useLoaderData();
   // console.log(services);
   return (
      <div className="bg-white text-gray-900 py-12 md:py-20 px-4 md:px-10">
         <div className="text-center mb-12 space-y-4">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wide">Our Services</h1>
            <p className="font-light text-sm md:text-lg max-w-3xl mx-auto text-gray-700">
               We offer a wide range of automotive services to keep your vehicle running smoothly. Our team ensures quality, reliability, and customer satisfaction with every service we provide.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.slice(0, 3).map((service, index) => (
               <Link to={`/service/${service._id}`}
                  key={index}
                  className="bg-gradient-to-b from-cyan-50 to-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 overflow-hidden"
               >
                  <img
                     className="w-full h-60 object-cover"
                     src={service.img}
                     alt={service.title}
                  />
                  <div className="p-5 space-y-3">
                     <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                     <p className="text-orange-700 font-medium">{service.price}</p>
                     <p className="text-gray-600 text-sm line-clamp-4">{service.description}</p>
                  </div>
               </Link>
            ))}
         </div>
         <div className='flex justify-end '>
            <Link to={'/all-service'} className='mt-5 btn bg-orange-500 border-0'>Explore More</Link>
         </div>
      </div>

   );
};

export default Services;