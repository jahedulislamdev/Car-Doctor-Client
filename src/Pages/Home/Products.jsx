import { Link } from 'react-router'
import product1 from '../../assets/images/products/1.png'
import product2 from '../../assets/images/products/2.png'
import product3 from '../../assets/images/products/3.png'
import product4 from '../../assets/images/products/4.png'
import product5 from '../../assets/images/products/5.png'
import product6 from '../../assets/images/products/6.png'


const Products = () => {
   const productData = [
      {
         image: product1,
         price: 20,
         title: "Car Engine Plug"
      },
      {
         image: product2,
         price: 20,
         title: "Car Air Filter"
      },
      {
         image: product3,
         price: 20,
         title: "Cools Led Light"
      },
      {
         image: product4,
         price: 20,
         title: "Cools Led Light"
      },
      {
         image: product5,
         price: 20,
         title: "Cools Led Light"
      },
      {
         image: product6,
         price: 20,
         title: "Cools Led Light"
      },
   ]
   return (
      <div className="bg-white text-gray-800 font-Onset md:px-16 px-6">
         <p className="text-center font-semibold text-3xl pt-16 mb-7">Browse Our Products</p>
         <p className="text-center font-light md:w-3/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

         <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-10'>
            {
               productData.map((p, idx) =>
                  <div key={idx} className=' rounded-xl shadow-sm'>
                     <div className='flex justify-center items-center bg-gray-200/50'><img className='w-1/2 h-52 object-center object-cover' src={p.image} alt={p.title} /></div>
                     <div className='p-4 font-semibold text-xl '>
                        <p>{p.title}</p>
                        <p className='text-orange-600 '>$ {p.price}</p>
                     </div>
                  </div>)
            }
         </div>
         <div className='flex justify-end'>
            <Link className='btn my-6 bg-orange-500 border-0'>More products</Link>
         </div>
      </div>
   );
};

export default Products;