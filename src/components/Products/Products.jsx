import React from 'react'
import Img1 from "/images/women-Ethenic.png"
import Img2 from "/public/images/women_western.jpg"
import Img3 from "/public/images/Goggles.jpg"
import Img4 from "/public/images/Printed-tshort.jpg"
import Img5 from "/public/images/Fashion-tshirt.jpg"
import { FaStar } from "react-icons/fa";
const Products = () => {

// here i will be defiining some of the products cards which i want to display on my page
const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Women Ethenic 1",
        rating :4.5,
        author:"White",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Women Western",
        rating :4.4,
        author:"red",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating :4.7,
        author:"Brown",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Printed T-Shirt",
        rating :5.0,
        author:"White",
        aosDelay:"600"
    },
    {
        id:5,
        img:Img5,
        title:"Fashion Tshirt",
        rating :4.9,
        author:"White",
        aosDelay:"800"
    }
]




  return (
    <div className='mt-14 mb-12'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for You</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Quae, doloremque!</p>
                </div>

                {/* body section */}
                    <div>
                        <div 
                        className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                        place-items-center'>

                            {/* card section of the body begins here */}
                                {
                                    ProductsData.map((data)=>(
                                        <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        key={data.id}
                                        className='space-y-3'
                                        > 
                                            <img src={data.img} alt=""
                                            className="h-[220px] w-[150px] object-cover rounded-md" />
                                        
                                            <div>
                                                <h3 className='font-semibold'>
                                                    {data.title}
                                                </h3>
                                                <p className='text-sm text-gray-600'>
                                                    {data.author}
                                                </p>
                                                <div className='flex items-center gap-1'>
                                                    <FaStar className='text-yellow-400 ' />
                                                    <span>{data.rating}</span>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
            
            </div>
    </div>
  )
}

export default Products