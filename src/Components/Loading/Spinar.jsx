import { FaCarSide } from 'react-icons/fa';

const Spinar = () => {
   return (
      <div className="flex flex-col items-center justify-center h-60 space-y-4">
         <div className="animate-bounce text-blue-600 text-5xl">
            <FaCarSide />
         </div>
         <p className="text-gray-600 text-lg font-medium animate-pulse">
            Diagnosing your car...
         </p>
      </div>
   );
};

export default Spinar;