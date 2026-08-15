'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import HeroBanner from "../../assets/backgroundBanner2.webp"
import HeroBanner1 from "../../assets/backgroundBanner6.webp"
import HeroBanner2 from "../../assets/backgroundBanner4.webp"
import MobileBanner from "../../assets/backgroundBannerMedium.webp"
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import "swiper/css";
const HeroSection = () => {
  return (
    <Swiper


    modules={[Autoplay]}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay:1500,
      disableOnInteraction: false
    }}
    speed={1000}
     className=" ">
      <SwiperSlide>
        <div className="relative w-full aspect-[1920/800] transition-all duration-500 ">
           <Image src={HeroBanner} alt="Hero Banner" className="object-cover " />
        </div>
      </SwiperSlide>
       
        <SwiperSlide>
        <div className="relative w-full aspect-[1920/800] ">
           <Image src={HeroBanner2} alt="Hero Banner" className="object-cover " />
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="relative w-full aspect-[1920/800] ">
           <Image src={HeroBanner1} alt="Hero Banner" className="object-cover" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
 
export default HeroSection