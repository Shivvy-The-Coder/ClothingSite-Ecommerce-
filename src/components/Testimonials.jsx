import React from 'react';
import Slider from 'react-slick'; 

const TestimonialData=[
    {
        id:1,
        name:"Stan Lee",
        img:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cupiditate!"
    },
    {
        id:2,
        name:"Dwayne Johnson",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/1200px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cupiditate!"
    },
    {
        id:3,
        name:"Virat Kohli",
        img:"https://www.livemint.com/lm-img/img/2024/05/16/1600x900/Virat_Kohli_1712150617454_1715842899316.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cupiditate!"
    },
    {
        id:4,
        name:"Ryan gosling",
        img:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/157012_v9_bc.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cupiditate!"
    },
    {
        id:5,
        name:"RDJ",
        img:"https://static.wikia.nocookie.net/ironman/images/7/79/Photo%28906%29.jpg/revision/latest?cb=20141019122536",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cupiditate!"
    },
]



const Testimonials = () => {
    var settings={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseonFocus:true,
        responsive:[
           { breakpoint:10000,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                infinite:true,
            },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };
  return (
    <div className='py-10 mb-10 '>
        <div className='container'>
            {/* header Section */}
            
            <div className='text-center mb-10 max-w-[600px] mx-auto '>
                    <p data-aos="fade-up" className='text-sm text-primary'>What Our Customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Quae, doloremque!</p>
                </div>

                {/* testimonial cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                            {
                                TestimonialData.map((data)=>(
                                  <div
                                  key={data.id}
                                  className='flex flex-col  shadow-lg py-8 px-8 mx-4 rounded-xl dark:bg-gray:800
                                  bg-primary/10 relative  border-[1px] gap-4'
                                  >
                                        <div>
                                            <img src={data.img} alt=""
                                            className='rounded-full w-20 h-20 object-cover' />
                                        </div>
                                  
                                        <div className='flex flex-col items-center gap-4'>
                                            <div className='space-y-4'>
                                            <p className='text-xs text-gray-500'
                                            >{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                                       
                                            </div>
                                        </div>
                                  </div>
                                  
                                ))
                            }
                    </Slider>
                </div>
        </div>
    </div>
  )
}

export default Testimonials