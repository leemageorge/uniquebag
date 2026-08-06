import React from 'react'
import HeroBanner from "../../assets/backgroundBanner.png"
import MobileBanner from "../../assets/backgroundImage.png"
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className="relative h-[90vh] md:h-[75vh] py-10 ">
      <Image src={HeroBanner} alt="Hero Banner" fill className="object-cover" />
      <div className='absolute inset-0 bg-black/10' />
      <div className="container absolute flex flex-col md:flex-row items-center justify-between gap-6 top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full px-4 lg:px-0">
        <div className='space-y-3'>
          <h6 className="text-[#8E4A1A] uppercase tracking-[2px]">Crafted to be Unique</h6>
         <div className="space-y-1 mb-10">
           <h2 className='text-3xl md:text-5xl text-white uppercase tracking-[3px] font-[800] leading-[30px] md:leading-[50px]'>
            Bags That Carry <br />
            Your Style
          </h2>
          <p className="text-[#7A6658] text-sm leading-[25px] italic">
            
            Manufacturer of premium quality travel bags, school bags, musical
            instrument bags and custom bags crafted with durability and style.
          </p>
         </div>
          <button className='bg-linear-to-br from-[#DFD9AB]  to-[#F1C1A9] px-6 py-2 shadow-[3px_3px_5px_3px_rgba(0,0,0,0.2)] cursor-pointer hover:shadow-md  rounded-full uppercase  font-bold text-[#532505]'>Explore more collection</button>
        </div>
        <div className="flex-row-reverse">
          <Image
            src={MobileBanner}
            alt="Mobile Banner"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
 
export default HeroSection