import React from 'react'
import {categoryBagData} from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
const ShopByCategory = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 pt-20">
      <h6 className="text-[#8E4A1A] uppercase tracking-[2px] mb-4">shop By Category</h6>
      <h3 className='mb-20 text-5xl md:text-7xl   uppercase tracking-[3px] font-[800] '>Find Your Style</h3>
      <div className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 place-items-center  ">
        {
          categoryBagData.map((category,index)=>(
            <div key={index}  className="flex flex-col items-center justify-center bg-[#EFE4D6] rounded-2xl py-10 rounded-tl-full rounded-tr-full ">
              <Image src={category.src} alt={category.title} className='w-64 h-64 object-fit'  />
              <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
              <Link href={category.link} className='uppercase tracking-[2px] text-sm bg-linear-to-br from-amber-700 via-amber-950 to-amber-800 px-4 py-2 rounded-2xl text-white shadow-[3px_3px_3px_3px_rgba(0,0,0,0.5]'>View More</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ShopByCategory