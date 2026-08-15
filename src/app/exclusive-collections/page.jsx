import { categoryBagData } from '@/data/data'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { musicInsrumentData } from '@/data/musicInsrumentData'
import CollectionBanner from "../../assets/musicInstrument/collectionBanner2.webp"
const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"]
})
const Collections = () => {
  return (
    <div className=" container mx-auto px-4 md:px-0 pt-10 lg:pt-20 ">
     <div className={`${roboto.className} flex flex-col md:flex-row items-center justify-between gap-6`}>
           <h2 className="text-5xl font-extrabold -tracking-[2px]">Essentials Collection</h2>
           <p className="max-w-md text-lg tracking-tight text-gray-500">An exclusive collection of music instrument bags crafted to protect what matters most. Designed for superior protection, lasting durability, and effortless portability for musicians on the move.</p>
     </div>
     <div className='grid grid-cols-1 md:gris-cols-3 lg:grid-cols-4 gap-6 pt-20 place-items-center '>
        {
            musicInsrumentData.map((instrument,index)=>(
                <div key={index} className='bg-[#EFE4D6] rounded-2xl p-8  flex flex-col items-center justify-center w-96 h-96'>
                    <Image src={instrument.src} alt={instrument.heading} className='w-full h-full object-contain ' />
                    <div className={`${roboto.className} text-md font-bold text-center text-[#b4540f]} uppercase border-t-2 border-[#221403] 
                    py-2`}> {instrument.heading}</div>
                </div>
            ))
        }
     </div>
     <div className=''>
        <h3 className='text-xl lg:text-3xl  text-center mt-20 italic opacity-40 '>Premium Instrument Bag Collection </h3>
        <h1 className='text-6xl lg:text-9xl text-center text-transparent tracking-wider [-webkit-text-stroke:2px_#532505] uppercase opacity-40 font-extrabold tracking-tighter'>Unique Bags</h1>
     </div>
    </div>
  )
}

export default Collections