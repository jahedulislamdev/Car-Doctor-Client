import { Link } from 'react-router'
import service1 from '../../assets/images/services/1.jpg'
import service2 from '../../assets/images/services/2.jpg'
import service3 from '../../assets/images/services/3.jpg'
import service4 from '../../assets/images/services/4.jpg'
import service5 from '../../assets/images/services/5.jpg'
import service6 from '../../assets/images/services/6.jpg'

const Services = () => {
   const services = [
      {
         image: service1, title: "Engine Repair", price: "$150", description: "Comprehensive engine diagnostics and repairs to ensure optimal performance."
      },
      { image: service2, title: "Brake Service", price: "$100", description: "Thorough brake inspection and replacement services for your safety." },
      { image: service3, title: "Oil Change", price: "$50", description: "Quick and efficient oil change service to keep your engine running smoothly." },
      { image: service4, title: "Tire Rotation", price: "$75", description: "Regular tire rotation to ensure even wear and extend tire life." },
      { image: service5, title: "Battery Replacement", price: "$120", description: "Reliable battery replacement services to keep your vehicle powered." },
      { image: service6, title: "Transmission Repair", price: "$300", description: "Expert transmission repair services to ensure smooth shifting and performance." }
   ]
   return (
      <div className="bg-white text-gray-900 py-12 md:py-20 px-4 md:px-10">
         <div className="text-center mb-12 space-y-4">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wide">Our Services</h1>
            <p className="font-light text-sm md:text-lg max-w-3xl mx-auto text-gray-700">
               We offer a wide range of automotive services to keep your vehicle running smoothly. Our team ensures quality, reliability, and customer satisfaction with every service we provide.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
               <Link
                  key={index}
                  className="bg-gradient-to-b from-cyan-50 to-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 overflow-hidden"
               >
                  <img
                     className="w-full h-60 object-cover"
                     src={service.image}
                     alt={service.title}
                  />
                  <div className="p-5 space-y-3">
                     <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                     <p className="text-orange-700 font-medium">{service.price}</p>
                     <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
               </Link>
            ))}
         </div>
         <div className='flex justify-end '>
            <Link to={'/'} className='mt-5 btn bg-orange-500 border-0'>Explore More</Link>
         </div>
      </div>

   );
};

export default Services;