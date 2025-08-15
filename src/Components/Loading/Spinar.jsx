import { FaCarSide } from 'react-icons/fa';
const Spinar = () => {
   return (
      <div className="flex bg-white flex-col items-center justify-center h-screen space-y-4">
         <div className="animate-bounce duration-700 text-orange-600 text-5xl">
            <FaCarSide />
         </div>
         <p className="text-gray-600 text-lg font-medium animate-pulse">
            Diagnosing your car...
         </p>

      </div>
   );
};

export default Spinar;