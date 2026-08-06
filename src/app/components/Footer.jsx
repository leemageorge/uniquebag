import { contactInfo, navbarLinks, socialLinks } from '@/data/data'
import React from 'react'
import Logo from "../../assets/logo.png"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className= "px-4 lg:px-0 mt-20 bg-[#E9D8C5]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        <div className="">
        <div className=" flex items-center">
                  <Image
                    src={Logo}
                    alt="Logo Image"
                    className="w-16 h-16  object-cover  "
                  />
                  <h3 className="font-bold tracking-[3px] text-lg text-gray-600   ">
                    UNIQUE BAGS
                  </h3>
                </div>
        <p className='text-gray-500 leading-[30px] text-md'>Designed to deliver exceptional quality, lasting performance, and modern style, our bags are made to meet every journey with confidence.</p>
      </div>
       <div>
        <h3 className="font-bold tracking-[3px] text-lg text-gray-600 mb-6" >Quick Links</h3>
        {
          navbarLinks.map((link,index)=>(
            <p key={index} className='text-gray-500 leading-[30px] text-md'>{link.title}</p>
          ))
        }
      </div>
       <div>
            <h3 className="font-bold tracking-[3px] text-lg text-gray-600   ">Social Media Links</h3>
            
      </div> 

  <div className="space-y-4">
    <h3 className="font-bold tracking-[3px] text-lg text-gray-600   ">Contact</h3>
    {contactInfo.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <item.icon className="w-5 h-5 mt-1 text-gray-500" />
        <div>
          <p className='text-gray-500 text-md'>{item.title}</p>
          <p className='text-gray-500  text-sm'>{item.value}</p>
        </div>
      </div>
    ))}
  </div>
       
      </div>
     <p className='border-t-[2px] border-[#D9C8B4] py-2 text-center text-gray-500'>

 © {new Date().getFullYear()} Unique Bags • Since 2004 • All Rights Reserved.
     </p>
    </div>
  )
}

export default Footer