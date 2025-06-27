import AboutImage1 from '../../assets/images/about_us/person.jpg'
import AboutImage2 from '../../assets/images/about_us/parts.jpg'
const About = () => {
   return (
      <div className="md:flex p-8 md:p-16 bg-linear-to-l from-cyan-100 to-orange-50 text-black font-Onset">
         <div className='relative'>
            <img className='rounded-lg w-3/4' src={AboutImage1} alt="person" />
            <img className='absolute w-1/2 top-1/2 right-5 border-8 border-white rounded-lg' src={AboutImage2} alt="" />
         </div>
         <div className='space-y-7 tracking-wide mt-16 md:mt-0'>
            <p className='text-orange-700 text-xl'>About us</p>
            <h1 className='text-3xl font-medium '>We are qualified & of experience in this field</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className='btn bg-orange-500 border-0  '>Get More info </button>
         </div>
      </div>
   );
};

export default About;