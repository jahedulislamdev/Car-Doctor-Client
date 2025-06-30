import Testomonial from "./Testomonial";
const CustomerReview = () => {
   return (
      <div>
         <div className="bg-white text-gray-900/90 py-10">
            <div className="text-center mb-12 space-y-4">
               <h1 className="text-2xl md:text-4xl font-semibold tracking-wide">What Customer Says</h1>
               <p className="font-light text-sm md:text-lg max-w-3xl mx-auto text-gray-700">
                  the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
               </p>
            </div>
            <div className="w-4/5 mx-auto">
               <Testomonial />
            </div>
         </div>
      </div>
   );
};

export default CustomerReview;