// import slide images
import slide1 from '../../assets/images/banner/1.jpg'
import slide2 from '../../assets/images/banner/2.jpg'
import slide3 from '../../assets/images/banner/3.jpg'
import slide4 from '../../assets/images/banner/4.jpg'
import slide5 from '../../assets/images/banner/5.jpg'
import slide6 from '../../assets/images/banner/6.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
   const slides = [
      {
         image: slide1,
         title: "Top-Quality Car Servicing at an Unbeatable Price",
         description:
            "Get premium car servicing without overspending. Our expert team ensures your vehicle is inspected, maintained, and repaired using the latest tools — all at a price that fits your budget. Enjoy smooth, safe driving with our affordable and reliable auto care solutions."
      },
      {
         image: slide2,
         title: "Certified and Experienced Mechanics You Can Trust",
         description:
            "Our certified mechanics are trained in the latest automotive technologies. With years of experience and dedication, they provide expert repairs and maintenance, ensuring your car performs at its best. Trust our professionals to handle your vehicle with care and precision."
      },
      {
         image: slide3,
         title: "Premium Quality Spare Parts for Reliable Repairs",
         description:
            "We use high-quality, genuine parts for every repair. This ensures better performance, longer durability, and safer driving. No cheap shortcuts — only trusted, brand-certified parts to keep your vehicle running like new with every replacement or upgrade."
      },
      {
         image: slide4,
         title: "All-in-One Car Care Solution for Maximum Performance",
         description:
            "From oil changes to complex repairs, we offer complete car care under one roof. Our modern tools and expert mechanics handle everything, keeping your car in peak condition and reducing the risk of future issues. Convenient, professional service — always."
      },
      {
         image: slide5,
         title: "Drive With Confidence Through Trusted Auto Care",
         description:
            "We build trust through honest service, clear communication, and dependable repairs. With detailed inspections and transparent processes, you always know what your car needs — and why. Feel confident and secure every time you hit the road."
      },
      {
         image: slide6,
         title: "Personalized Car Services for Every Make and Model",
         description:
            "Every vehicle is different, and we treat it that way. Whether it's a compact car or a luxury SUV, our tailored services ensure the perfect care for your specific model. Precision, quality, and care — every time you visit."
      }
   ];


   return (
      <>
         <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            speed={1500}
            pagination={{
               clickable: true,
            }}
            autoplay={{
               delay: 2500,
               // pauseOnMouseEnter: true,
               stopOnLastSlide: false,
               disableOnInteraction: false
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper h-[400px] md:h-screen w-full"
         >
            {slides?.map((slide, index) => (
               <SwiperSlide key={index} >
                  <div className='relative w-full h-full font-Onset'>
                     <img className='object-cover object-top lg:object-center w-full h-full' src={slide.image} alt="" />
                     <div className="absolute flex justify-start items-center w-full h-full bottom-0 left-0 p-4  bg-linear-to-r from-gray-900  to-gray-500/20">
                        <div className='md:w-3/5 md:ms-12 space-y-5 animate-fade-in-up-delicate'>
                           <h2 className="text-2xl md:text-4xl font-semibold">{slide.title}</h2>
                           <p className='font-extralight md:font-light line-clamp-3 leading-7 '>{slide.description}</p>
                           <div className='flex gap-2 '>
                              <button className='btn btn-sm md:btn-md bg-orange-700 '>Discover More</button>
                              <button className='btn btn-sm btn-outline md:btn-md '>Latest Projects</button>
                           </div>

                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper >
      </>
   );
};

export default Banner;