import { Link, useLoaderData } from "react-router-dom";
import headingBackground from '../../assets/images/checkout/checkout.png';
import logo from '../../assets/logo.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";

const ServiceDetail = () => {
   const selectedServices = useLoaderData();
   const steps = [
      { number: "01", title: "STEP ONE", description: "It Uses A Dictionary Of Over 200." },
      { number: "02", title: "STEP TWO", description: "It Uses A Dictionary Of Over 200." },
      { number: "03", title: "STEP THREE", description: "It Uses A Dictionary Of Over 200." },
   ];

   return (
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset">
         {/* Heading Section */}
         <div
            className="h-12 md:h-40 flex items-center justify-center bg-white mb-4 rounded-lg"
            style={{ backgroundImage: `url(${headingBackground})`, backgroundSize: 'cover', opacity: 0.9, backgroundPosition: 'center' }}
         >
            <div className="bg-gray-900/50 w-full h-full flex items-center justify-center text-white rounded-lg">
               <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">Services Details</h1>
            </div>
         </div>

         {/* Breadcrumbs */}
         <div className="breadcrumbs text-xs sm:text-sm flex justify-center items-center mb-4">
            <ul>
               <li><a>Services</a></li>
               <li><a>Services Details</a></li>
               <li>{selectedServices.title}</li>
            </ul>
         </div>

         {/* Image + Sidebar */}
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:p-6">
            {/* Left Side Image */}
            <div className="lg:col-span-3">
               <img className="w-full h-auto object-cover object-center rounded-xl" src={selectedServices.img} alt="" />
            </div>

            {/* Right Side Services List */}
            <div className="lg:col-span-2 space-y-4 px-4 py-4 bg-gray-100 rounded-xl">
               <h1 className="font-bold text-lg sm:text-xl">Services</h1>
               {["Full Car Repair", "Engine Repair", "Automatic Services", "Engine Oil Change", "Battery Change"].map((service, idx) => (
                  <div
                     key={idx}
                     className="py-3 hover:bg-orange-800/60 px-3 rounded-lg cursor-pointer bg-white/80 hover:text-white transition duration-300"
                  >
                     <p className="flex items-center justify-between">{service} <IoIosArrowRoundForward className="size-6 sm:size-7" /></p>
                  </div>
               ))}
            </div>
         </div>

         {/* Main Details */}
         <div className="px-3 md:px-6">
            <h1 className="font-semibold text-2xl sm:text-3xl py-4">{selectedServices.title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
               {/* Left Column */}
               <div className="lg:col-span-3 mt-3">
                  <p className="text-pretty text-justify pb-4">
                     There are many variations of passages of Lorem Ipsum available, but the majority...
                  </p>

                  {/* Facilities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7 mt-8">
                     {selectedServices.facility.map((facility, idx) => (
                        <div key={idx} className="border-t-2 rounded border-orange-600 p-5 bg-gray-100/50">
                           <p className="font-semibold text-lg sm:text-2xl mb-2">{facility.name}</p>
                           <p className="text-sm sm:text-base">{facility.details}</p>
                        </div>
                     ))}
                  </div>

                  <p className="text-pretty py-6">There are many variations of passages of Lorem Ipsum available...</p>

                  {/* Steps */}
                  <h2 className="font-semibold text-xl sm:text-2xl py-4">3 Simple Steps to Process</h2>
                  <p className="text-pretty pb-6">There are many variations of passages...</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                     {steps.map((step, index) => (
                        <div key={index} className="card w-full sm:w-72 bg-white border border-gray-200 text-center p-6">
                           <div className="flex justify-center mb-4">
                              <div className="rounded-full bg-red-500 text-white w-12 h-12 flex items-center justify-center text-lg font-bold shadow-inner ring ring-red-100">
                                 {step.number}
                              </div>
                           </div>
                           <h2 className="font-bold text-base sm:text-lg mb-2">{step.title}</h2>
                           <p className="text-xs sm:text-sm text-gray-500">{step.description}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Column */}
               <div className="lg:col-span-2 w-full">
                  {/* Download Section */}
                  <div className="bg-black/90 text-white p-4 rounded-lg">
                     <h1 className="font-semibold mb-3 text-xl sm:text-2xl">Download</h1>
                     {[1, 2].map((item) => (
                        <div key={item} className="flex items-center justify-between gap-3 p-4 mb-3 rounded-lg cursor-pointer px-6 border border-gray-700">
                           <div className="flex items-center gap-3">
                              <FaRegFileAlt className="size-5 sm:size-6" />
                              <div>
                                 <h3 className="font-semibold text-sm sm:text-base">Our Brochure</h3>
                                 <p className="text-xs sm:text-sm hover:underline hover:text-blue-300 opacity-70">Download</p>
                              </div>
                           </div>
                           <button className="bg-orange-500 text-white p-1 rounded-lg">
                              <IoIosArrowRoundForward className="size-7 sm:size-9" />
                           </button>
                        </div>
                     ))}
                  </div>

                  {/* Help Section */}
                  <div className="py-10 px-5 sm:px-7 bg-black/90 text-white rounded-lg mt-6">
                     <div className="flex justify-center items-center">
                        <img src={logo} alt="logo" className="w-24 sm:w-32" />
                     </div>
                     <h2 className="font-semibold text-lg sm:text-2xl text-center mt-2 px-4">
                        Need Help? We Are Here To Help You
                     </h2>
                     <div className="bg-white text-black p-4 rounded-lg mt-6 text-center relative">
                        <h2 className="font-semibold text-xl sm:text-3xl">
                           <span className="text-orange-600">Car Doctor</span> Special
                        </h2>
                        <p className="mb-6 text-base sm:text-xl">Save up to <span className="text-orange-500 font-semibold">60% off</span></p>
                        <button className="cursor-pointer bg-orange-700 py-2 px-6 rounded-lg text-white mt-2">
                           Get A Quote
                        </button>
                     </div>
                  </div>

                  {/* Price & Checkout */}
                  <h1 className="font-bold text-2xl sm:text-3xl text-center py-7">Price: ${selectedServices.price}</h1>
                  <div className="flex justify-center items-center text-center pb-4">
                     <Link
                        to={`/checkout/${selectedServices._id}`}
                        className="w-full bg-orange-600 hover:bg-orange-800 transition-colors duration-300 text-white p-3 cursor-pointer rounded"
                     >
                        Proceed Checkout
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetail;
