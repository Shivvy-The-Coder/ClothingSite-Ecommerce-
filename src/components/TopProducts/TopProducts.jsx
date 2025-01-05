import React from 'react';
import Img1 from "/images/shirt-1.png";
import Img2 from "/images/shirt-2.png";
import Img3 from "/images/shirt-3.png";
import { FaStar } from "react-icons/fa";
const TopProducts = () => {

const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        Desccription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint."
    },
    {
        id:2,
        img:Img2,
        title:"Printed Shirt",
        Desccription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint."
    },
    {
        id:3,
        img:Img3,
        title:"Women Shirt",
        Desccription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint."
    },
    
]

  return (
    <div>
        <div className='container'>
            {/* header section */}
            <div className='text-left mb-24 '>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for You</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Quae, doloremque!</p>
                        
            </div>
            {/* Body section */}

            <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap:20 md:gap-5 place-items-center'>
                {ProductsData.map((data)=>(
                    <div
                    data-aos="zoom-in"
                     key={data.id}
                    
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                    hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                        {/* below is the image Section  */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" 
                            className='max-w-[140px] block mx-auto transform -translate-y-20 
                            group-hover:scale-105 duration-300 drop-shadow-md'
                            /></div>
                        {/* detail Section */}
                            <div className='p-4 text-center'>
                                <div className='w-full flex justify-center items-center gap-1'>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>
                                    {data.title}
                                </h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                    {data.Desccription}</p>

                                <button
                                className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                >
                                    Order now
                                </button>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts