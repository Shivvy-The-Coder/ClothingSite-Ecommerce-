import React from 'react';
import image1 from '/images/image1.png';
import image2 from '/images/image2.png';
import image3 from '/images/image3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList=[
    {
        id:1,
        img:image1,
        title:"upto 50% Off on all Men's Wear",
        Description:"lore his life will be changed forever be changed volor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium dolor unde alias animi temporibus "
    },
    {
        id:2,
        img:image2,
        title:"upto 30% Off on all Wemen Wear",
        Description:"lore his life will be changed forever be changed volor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium dolor unde alias animi temporibus "
    },
    {
        id:3,
        img:image3,
        title:"upto 70% Off on all product Sale",
        Description:"lore his life will be changed forever be changed volor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium dolor unde alias animi temporibus "
    }
]

const Hero = () => {
  

  var settings={
    dots: false,
    arrows:false,
    infinite:true,
    speed:800,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseonHover:false,
    pauseOnFocus:true
  };
  return (


    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background Pattern */}

        <div className="h-[700px] w-[700px]  bg-primary/40 absolute -top-1/2 right-0 rotate-45 rounded-3xl z-9">

        </div>

        {/* hero Section */}

        <div className='container pb-8 sm:pb-0'>
              <Slider 
              {...settings}>
                  {
                    ImageList.map((data)=>(
                      <div key={data.id}>
                      <div className='grid grid-cols-1  sm:grid-cols-2 lg:text-7xl font-bold'>
        
                        {/* below will be the text content section */}
                        <div
                        className='flex flex-col justify-center gap-4 pt-12 sm :pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'
                        >
                            <h1 className='text-5xl sm:text-6xl'
                            >{data.title}</h1>
                            <p className='text-sm'
                            >{data.Description}</p>
                               <div className='flex justify-center gap-4 pt-4'>
                               <button  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
                                                     text-white w-[150px] h-[50px] rounded-full flex items-center justify-center gap-3 group md:text-[20px]">
                                                                  Order Now
                               </button>

                            </div>
                        </div>
                        
        
                        {/* image section */}
                              <div className='order-1 sm:order-2'>
                                  <div className='relative z-10'>
                                    <img src={data.img} alt="" 
                                    className='w-[300px] h-[300px] sm:w-[450px] sm:scale-125 object-contain mx-auto'/>
                                  </div>
                              </div>
        
                      </div>
                      </div> 
                    ))}
              


              </Slider>
                     

        </div>
    </div>
  )
}

export default Hero
