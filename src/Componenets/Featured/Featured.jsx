import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../../src/index.css';

import imgg1 from "../../assets/images/adventure2.jpg"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Data } from '../Data';
import { CartContext } from '../../Features/Context';



const Featured = ()=>{
    const {dispatch,cart} = useContext(CartContext);
   
    console.log(cart);
    
    const [product, setProduct] = useState()
    
    return(
        <div className='flex flex-col justify-center items-center p-3 2xl:pb-[50px]'>

        <h1 className='2xl:text-[30px] font-bold'>Featured Books</h1>

    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{delay:1000, disableOnInteraction:false}}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        <div className='imgSlider w-full'>
            {
                Data.map((each)=>(
                    <SwiperSlide>
                    <div key={each.id} className=' p-3 flex flex-col justify-center items-center text-[30px] w-full'>
                        <img src={each.book} className='bg-contain'></img>
                        <p className='text-[18px]'>{each.title}</p>
                        <p className=''>{each.cat}</p>
                        <button className='text-[14px] p-2 bg-green-400' onClick={()=> dispatch({type:"Add", product:each})}>Add to cart</button>
                    </div>
                    </SwiperSlide>
                ))
            }
             
        </div>
        
        
      </Swiper>
    </div>
    )
};

export default Featured;