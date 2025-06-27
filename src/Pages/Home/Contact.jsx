import callIcon from '../../assets/icons/Call Icon.png';
import locationIcon from '../../assets/icons/Location Icon.png';
import dateIcon from '../../assets/icons/Date Icon.png';

const Contact = () => {
   return (
      <div className="bg-white py-16">
         <div className="w-11/12 md:w-10/12 mx-auto bg-black rounded-2xl px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Open Time */}
            <div className="flex items-center gap-5">
               <img className="w-12 h-12 object-contain" src={dateIcon} alt="Opening Hours" />
               <div>
                  <p className="text-sm text-gray-300">We are open Monday to Friday</p>
                  <h2 className="text-lg font-semibold text-white">7 AM - 9 PM</h2>
               </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">
               <img className="w-12 h-12 object-contain" src={callIcon} alt="Call Us" />
               <div>
                  <p className="text-sm text-gray-300">Have any questions?</p>
                  <h2 className="text-lg font-semibold text-white">+8801831303692</h2>
               </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
               <img className="w-12 h-12 object-contain" src={locationIcon} alt="Location" />
               <div>
                  <p className="text-sm text-gray-300">Need a Repair? Visit Us</p>
                  <h2 className="text-lg font-semibold text-white">Liza Street, New York</h2>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
