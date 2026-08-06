import Image from 'next/image'
import React from 'react'
import Guitarmodel from "../../assets/musicInstrument/modelwithguitar.webp"
import model2withviolin from "../../assets/musicInstrument/model2withviolin.webp"
import model3withkeyboard from "../../assets/musicInstrument/model3withkeyboard.webp"
const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 pt-10 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className=" flex flex-col justify-center  min-h-[300px]">
          <h6 className="text-[#8E4A1A] uppercase tracking-[3px] mb-4 text-center md:text-left">
            Premium Instrument Bags
          </h6>

          <h2 className="text-2xl md:text-3xl font-[500] text-center md:text-left uppercase  mb-8">
            Protecting Every Instrument With Precision
          </h2>

          <button className="w-fit place-self-center md:place-self-start rounded-full bg-gradient-to-br from-[#DFD9AB] to-[#F1C1A9] px-8 py-3 font-bold uppercase text-[#532505] shadow-lg transition hover:scale-105">
            Get Yours Today
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl min-h-[500px]">
          <Image
            src={Guitarmodel}
            alt="Guitar Bag"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-2xl min-h-[500px]">
          <Image
            src={model2withviolin}
            alt="Violin Bag"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-2xl min-h-[500px]">
          <Image
            src={model3withkeyboard}
            alt="Keyboard Bag"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default CategorySection