import React from 'react'
import Logo from "../../assets/logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { PhoneCallIcon } from 'lucide-react'
const Header = () => {
  return (
    <div className=" border-b-[0.1px] border-[#D9C8B4] py-2">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
        <h3 className="hidden lg:block text-md text-gray-600">SINCE 2004</h3>
        <div className=" flex flex-col lg:flex-row items-center ">
          <Image
            src={Logo}
            alt="Logo Image"
            className=" w-24 h-10 lg:w-48 lg:h-16 object-cover  "
          />
          {/* <h1 className="font-bold tracking-[3px] text-lg text-gray-600 hidden md:block  ">
            UNIQUE BAGS
          </h1> */}
        </div>
      <div className=" bg-linear-to-br from-amber-700  to-[#F1C1A9] px-4 py-2 shadow-[3px_3px_5px_3px_rgba(0,0,0,0.2)] cursor-pointer hover:shadow-md  rounded-full">
       
          <a href="tel:+919447060659" className='text-white font-bold flex items-center gap-2 '>
             <PhoneCallIcon className= "w-5 h-5 text-white" />
             <span className='hidden md:block'>CONNECT US</span></a>
      </div>
      </div>
    </div>
  );
}

export default Header