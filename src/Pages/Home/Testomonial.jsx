import quote from '../../assets/icons/quote.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Testimonial = () => {
   const testimonials = [
      {
         id: 1,
         name: "Sarah Williams",
         role: "Homeowner",
         image: "https://randomuser.me/api/portraits/women/21.jpg",
         date: "Jan 18,2024",
         message:
            "Finding my dream home was effortless with HomeHeaven! The process was smooth, and the support team was there at every step.The process was smooth, and the support team was there at every step.",
      },
      {
         id: 2,
         name: "James Brown",
         role: "Tenant",
         date: "Mar 18, 2024",
         image: "https://randomuser.me/api/portraits/men/22.jpg",
         message:
            "I rented my perfect apartment through this platform. The listings were detailed, and the search filters made it easy to find exactly what I wanted.and the search filters made it easy to find exactly what I wanted.",
      },
      {
         id: 3,
         name: "Olivia Johnson",
         role: "Real Estate Investor",
         image: "https://randomuser.me/api/portraits/women/23.jpg",
         date: "Sep 18,2023",
         message:
            "HomeHeaven offers a wide range of properties and excellent insights into the market.It’s been invaluable for my investments! It’s been invaluable for my investments!",
      },
      {
         id: 4,
         name: "Liam Martin",
         role: "Seller",
         image: "https://randomuser.me/api/portraits/men/24.jpg",
         date: "Aug 18,2023",
         message:
            "Selling my property was so easy with HomeHeaven. I got great offers quickly, and the customer service was outstanding.I got great offers quickly, and the customer service was outstanding.",
      },
      {
         id: 5,
         name: "Emma Davis",
         role: "First-Time Buyer",
         image: "https://randomuser.me/api/portraits/women/25.jpg",
         date: "Jan 18,2025",
         message:
            "I was nervous about buying my first home,I got great offers quickly, and the customer service was outstanding. but this platform made the experience stress-free and enjoyable. Highly recommend!",
      },
   ];

   return (
      <Swiper
         loop={true}
         speed={1200}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         breakpoints={{  // larger mobiles
            640: { slidesPerView: 1, spaceBetween: 20 },   // tablets
            1024: { slidesPerView: 2, spaceBetween: 30 },  // laptops
            1280: { slidesPerView: 3, spaceBetween: 30 },  // desktops
         }}
         modules={[FreeMode, Autoplay]}
         className="mySwiper2"
      >
         {testimonials.map((tes) => (
            <SwiperSlide
               key={tes.id}
               className="md:p-8 p-4 rounded-lg bg-gray-200/40 shadow-md hover:shadow-lg transition"
            >
               <Link>
                  <div className="flex justify-between items-center space-x-5 md:mb-10 mb-4">
                     <div className="flex items-center gap-4">
                        <img
                           className="rounded-full w-12 h-12 object-cover"
                           src={tes.image}
                           alt={tes.name}
                        />
                        <div>
                           <p className="font-semibold text-md sm:text-lg">{tes.name}</p>
                           <p className="text-xs md:text-sm font-light text-left">{tes.role}</p>
                        </div>
                     </div>
                     <img className="w-8" src={quote} alt="quote" />
                  </div>

                  <p className="text-gray-800/80 text-left text-sm sm:text-base max-h-24 sm:max-h-40 overflow-hidden">
                     {tes.message.slice(0, 170) + "..."}
                  </p>

                  <div className="flex items-center justify-between sm:mt-9 mt-5">
                     <p className="flex space-x-2 text-yellow-600">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                        <FaRegStar />
                     </p>
                     <p className="text-gray-700/60 font-light">{tes.date}</p>
                  </div>
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Testimonial;
