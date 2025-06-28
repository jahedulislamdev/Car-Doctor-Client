import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// Team member images
import member1 from '../../assets/images/team/1.jpg';
import member2 from '../../assets/images/team/2.jpg';
import member3 from '../../assets/images/team/3.jpg';

const Team = () => {
   const teamData = [
      { image: member1, name: "John Doe", title: "Engine Expert" },
      { image: member2, name: "John Pitter", title: "Engine Expert" },
      { image: member3, name: "Joseph Lomera", title: "Engine Expert" }
   ];

   return (
      <div className="bg-white text-black font-Onset py-12">
         <h1 className="text-4xl font-bold text-center mb-4">Meet Our Team</h1>
         <p className="text-center w-4/5 md:w-2/3 mx-auto text-gray-600 mb-10">
            The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
            {teamData.map((member, index) => (
               <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-md text-center pb-5">
                  <img
                     src={member.image}
                     alt={`Team member - ${member.name}`}
                     className="w-full h-64 object-cover rounded-md mb-4 hover:scale-102 transition duration-900"
                  />
                  <h3 className="text-xl font-semibold capitalize">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                  <div className="flex justify-center gap-4 text-lg text-gray-600">
                     <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
                     <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                     <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
                     <a href="#" className="hover:text-pink-500"><RiInstagramFill /></a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Team;
