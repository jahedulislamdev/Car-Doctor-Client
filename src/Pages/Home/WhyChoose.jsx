import { FaUsers, FaHeadset, FaTools, FaShieldAlt, FaShippingFast, FaClock } from "react-icons/fa";

const features = [
   {
      icon: <FaUsers size={30} />,
      title: "Expert Team",
   },
   {
      icon: <FaClock size={30} />,
      title: "Timely Delivery",
      active: true,
   },
   {
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
   },
   {
      icon: <FaTools size={30} />,
      title: "Best Equipment",
   },
   {
      icon: <FaShieldAlt size={30} />,
      title: "100% Guaranty",
   },
   {
      icon: <FaShippingFast size={30} />,
      title: "Timely Delivery",
   },
];

const WhyChooseUs = () => {
   return (
      <div className="bg-white text-gray-900/90 py-10">
         <div className="text-center mb-12 space-y-4">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wide">Why Choose Us</h1>
            <p className="font-light text-sm md:text-lg max-w-3xl mx-auto text-gray-700">
               The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
         </div>

         <div className="flex flex-wrap justify-center gap-4 px-4">
            {features.map((item, index) => (
               <div
                  key={index}
                  className={`flex flex-col items-center justify-center w-40 h-40 rounded-lg border border-gray-400/50 transition-all duration-300 hover:bg-orange-600 hover:text-white`}
               >
                  <div className="mb-2">{item.icon}</div>
                  <div className="text-center text-sm font-semibold">{item.title}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default WhyChooseUs;
