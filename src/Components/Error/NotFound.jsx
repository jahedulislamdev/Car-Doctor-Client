import { useRouteError } from 'react-router-dom';

const NotFound = () => {
   const listenErr = useRouteError();
   const statusCode = listenErr?.status || 500;

   return (
      <>
         {statusCode === 404 ? (
            <div className="bg-[#0F172A] h-screen flex justify-center items-center space-x-2">
               <p className="text-lg sm:text-2xl font-bold border-e pe-2 sm:pe-4 text-gray-400">404</p>
               <p className="text-lg sm:text-xl font-semibold text-gray-300">This page could not be found.</p>
            </div>
         ) : (
            <div className="bg-[#0F172A] text-white h-screen flex flex-col justify-center items-center px-4 text-center">
               <p className="text-5xl font-bold text-red-500 mb-4">{statusCode}</p>
               <p className="text-lg font-medium max-w-xl">
                  {listenErr?.statusText || "Something went wrong. Please try again later or contact support."}
               </p>
               <p className="text-sm text-gray-400 mt-2">
                  (Check your browser console for more technical details.)
               </p>
            </div>
         )}
      </>
   );
};

export default NotFound;
