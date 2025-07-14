import { useLoaderData } from "react-router-dom";
import headingBackground from '../../assets/images/checkout/checkout.png'
import logo from '../../assets/logo.png'
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
      <div className="bg-white text-gray-900 md:py-7 px-4 md:px-10 font-Onset" >
         <div className="h-40 flex items-center justify-center bg-white mb-4 rounded-lg" style={{ backgroundImage: `url(${headingBackground})`, backgroundSize: 'cover', opacity: 0.9, backgroundPosition: 'center' }}>
            <div className="bg-gray-900/50 w-full h-full flex items-center justify-center text-white rounded-lg">
               <h1 className="font-semibold text-3xl">Services Details</h1>
            </div>
         </div>
         <div className="breadcrumbs text-sm flex justify-center items-center">
            <ul>
               <li><a>Services</a></li>
               <li><a>Services Details</a></li>
               <li>{selectedServices.title}</li>
            </ul>
         </div>
         <div className="grid grid-cols-5 gap-6 p-6">
            <div className="col-span-3">
               <img className="w-full h-100 object-cover object-center rounded-xl" src={selectedServices.img} alt="" />
            </div>
            <div className="col-span-2 space-y-4 px-10 py-4 bg-gray-100 rounded-xl">
               <h1 className="font-bold text-xl">Services</h1>
               <div className="py-3 hover:bg-orange-800/60 px-3 rounded-lg cursor-pointer bg-white/80 hover:text-white transition duration-300">
                  <p className="flex items-center justify-between">Full Car Repair <IoIosArrowRoundForward className="size-7 color-r" /></p>
               </div>
               <div className="py-3 hover:bg-orange-800/60 px-3 rounded-lg cursor-pointer bg-white/80 hover:text-white transition duration-300">
                  <p className="flex items-center justify-between">Engine Repair <IoIosArrowRoundForward className="size-7 color-r" /></p>
               </div>
               <div className="py-3 hover:bg-orange-800/60 px-3 rounded-lg cursor-pointer bg-white/80 hover:text-white transition duration-300">
                  <p className="flex items-center justify-between">Automatic Services <IoIosArrowRoundForward className="size-7 color-r" /></p>
               </div>
               <div className="py-3 hover:bg-orange-800/60 px-3 rounded-lg cursor-pointer bg-white/80 hover:text-white transition duration-300">
                  <p className="flex items-center justify-between">Engine Oil Change <IoIosArrowRoundForward className="size-7 color-r" /></p>
               </div>
               <div className="py-3 hover:bg-orange-800/60 px-3 rounded-lg cursor-pointer bg-white/80 hover:text-white transition duration-300">
                  <p className="flex items-center justify-between">Battery Change <IoIosArrowRoundForward className="size-7 color-r" /></p>
               </div>
            </div>
         </div>
         <div className="px-6">
            <h1 className="font-semibold text-3xl py-4">{selectedServices.title}</h1>
            <div className="grid grid-cols-5 gap-8">
               <div className="col-span-3 mt-3">
                  <p className="text-pretty text-justify pb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-7 mt-8">
                     {
                        selectedServices.facility.map((facility, idx) => (
                           <div key={idx} className="border-t-2 rounded border-orange-600 p-5 bg-gray-100/50">
                              <p className="font-semibold text-2xl mb-2">{facility.name}</p>
                              <p>{facility.details}</p>
                           </div>
                        ))
                     }
                  </div>
                  <p className="text-pretty text-justify py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                  <h2 className="font-semibold text-2xl py-4">3 Simple Steps to Process</h2>
                  <p className="text-pretty text-justify pb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                     {steps.map((step, index) => (
                        <div
                           key={index}
                           className="card w-72 bg-white border border-gray-200 text-center p-6"
                        >
                           <div className="flex justify-center mb-4">
                              <div className="rounded-full bg-red-500 text-white w-12 h-12 flex items-center justify-center text-lg font-bold shadow-inner ring ring-red-100">
                                 {step.number}
                              </div>
                           </div>
                           <h2 className="font-bold text-lg mb-2">{step.title}</h2>
                           <p className="text-sm text-gray-500">{step.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="col-span-2 w-full">
                  <div className="bg-black/90 text-white p-4  rounded-lg">
                     <h1 className="font-semibold mb-3 text-2xl">Download</h1>
                     <div className="flex items-center justify-between gap-3 p-4 mb-3 rounded-lg cursor-pointer px-6 border border-gray-700">
                        <div className="flex items-center gap-3">
                           <FaRegFileAlt className="size-6" />
                           <div>
                              <h3 className="font-semibold ">Our Brochure</h3>
                              <p className="text-sm hover:underline hover:text-blue-300 opacity-70">Download</p>
                           </div>
                        </div>
                        <button className="bg-orange-500 text-white p-1 rounded-lg">
                           <IoIosArrowRoundForward className="size-9" />
                        </button>
                     </div>
                     <div className="flex items-center justify-between gap-3 p-4 rounded-lg cursor-pointer px-6 border border-gray-700">
                        <div className="flex items-center gap-3">
                           <FaRegFileAlt className="size-6" />
                           <div>
                              <h3 className="font-semibold ">Our Brochure</h3>
                              <p className="text-sm hover:underline hover:text-blue-300 opacity-70">Download</p>
                           </div>
                        </div>
                        <button className="bg-orange-500 text-white p-1 rounded-lg">
                           <IoIosArrowRoundForward className="size-9" />
                        </button>
                     </div>
                  </div>
                  <div className="py-10 px-7 bg-black/90 text-white p-4 rounded-lg mt-6">
                     <div className="flex justify-center items center">
                        <img src={logo} alt="logo" />
                     </div>
                     <h2 className="font-semibold text-2xl text-center mt-2 px-4">
                        Need Help? We Are Here To Help You
                     </h2>
                     <div className="bg-white text-black p-4 rounded-lg mt-6 text-center relative">
                        <h2 className="font-semibold text-3xl"><span className="text-orange-600">Car Doctor</span> Special</h2>
                        <p className="mb-6 text-xl">Save up to <span className="text-orange-500 font-semibold">60% off</span></p>
                        <button className="cursor-pointer bg-orange-700 py-2 px-6 rounded-lg text-white absolute bottom--2 left-1/3">Get A Quote</button>
                     </div>
                  </div>
                  <h1 className="font-bold text-3xl text-center py-7">Price: ${selectedServices.price}</h1>
                  <button className="w-full bg-orange-600 text-white p-3 cursor-pointer rounded">Proceed Checkout</button>
               </div>
            </div>
         </div>

      </div>
   );
};

export default ServiceDetail;