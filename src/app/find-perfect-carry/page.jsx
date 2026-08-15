'use client'
import { categoryBagData } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import categorySubBanner from "../../assets/categorySubBanner.webp"
import categoryBanner from "../../assets/categoryBanner1.webp"
import { categorycamera, categoryCollegebag, categoryDeliverybag, categoryLadiesBag, categoryTravelBag } from '@/data/musicInsrumentData'

const FindPerfectCarry = () => {
  return (
    <div>
      <div className="w-full h-[200px] lg:h-[500px]">
        <Image
          src={categoryBanner}
          alt=" Category Banner"
          className="lg:w-full lg:h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-0 mt-16  ">
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-6">
          {/* Left section after banner */}

          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-lg text-gray-500 font-bold tracking-[2px]">
              Category
            </h4>
            {categoryBagData.map((item, index) => (
              <div key={index}>
                <p className="text-md text-gray-400 uppercase font-semibold hover:text-gray-600 cursor-pointer">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          {/* right section after banner */}
          <div className="flex flex-col  gap-6">
            <div>
              <h4 className="text-xl text-gray-500 font-bold tracking-[2px] uppercase mb-6">
                Camera Bag
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categorycamera.map((item, index) => (
                  <div
                    key={index}
                    className="w-56 h-80 rounded-t-full bg-[#EFE4D6] flex flex-col items-center justify-between p-4"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src={item.src}
                        alt="camera bag"
                        className=" object-cover"
                      />
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/919447060659?text=${encodeURIComponent(
                            `Hi, I'm interested in this bag. Please provide more details.`,
                          )}`,
                          "_blank",
                        )
                      }
                      className="cursor-pointer bg-linear-to-br from-amber-700 to-amber-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#3F271A] transition-all duration-300"
                    >
                      ORDER NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl text-gray-500 font-bold tracking-[2px] uppercase mb-6">
                Delivery Bag
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categoryDeliverybag.map((item, index) => (
                  <div
                    key={index}
                    className="w-56 h-80 rounded-t-full bg-[#EFE4D6] flex flex-col items-center justify-between p-4"
                  >
                     <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={item.src}
                      alt="camera bag"
                      className=" object-cover"
                    />
                    </div>
                                        <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/919447060659?text=${encodeURIComponent(
                            `Hi, I'm interested in this bag. Please provide more details.`,
                          )}`,
                          "_blank",
                        )
                      }
                      className=" cursor-pointer bg-linear-to-br from-amber-700 to-amber-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#3F271A] transition-all duration-300"
                    >
                      ORDER NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl text-gray-500 font-bold tracking-[2px] uppercase mb-6">
                Travel Bag
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categoryTravelBag.map((item, index) => (
                  <div
                    key={index}
                    className="w-56 h-80 rounded-t-full bg-[#EFE4D6] flex flex-col items-center justify-between p-4"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={item.src}
                      alt="camera bag"
                      className=" object-cover"
                    />
                    </div>
                      <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/919447060659?text=${encodeURIComponent(
                            `Hi, I'm interested in this bag. Please provide more details.`,
                          )}`,
                          "_blank",
                        )
                      }
                      className="cursor-pointer bg-linear-to-br from-amber-700 to-amber-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#3F271A] transition-all duration-300"
                    >
                      ORDER NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl text-gray-500 font-bold tracking-[2px] uppercase mb-6">
                College Bag
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categoryCollegebag.map((item, index) => (
                  <div
                    key={index}
                    className="w-56 h-80 rounded-t-full bg-[#EFE4D6] flex flex-col items-center justify-between p-4"
                  >
                     <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={item.src}
                      alt="camera bag"
                      className=" object-cover"
                    />
                    </div>
                      <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/919447060659?text=${encodeURIComponent(
                            `Hi, I'm interested in this bag. Please provide more details.`,
                          )}`,
                          "_blank",
                        )
                      }
                      className="cursor-pointer bg-linear-to-br from-amber-700 to-amber-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#3F271A] transition-all duration-300"
                    >
                      ORDER NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl text-gray-500 font-bold tracking-[2px] uppercase mb-6">
                Ladies Bag
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categoryLadiesBag.map((item, index) => (
                  <div
                    key={index}
                    className="w-56 h-80 rounded-t-full bg-[#EFE4D6] flex flex-col items-center justify-between p-4"
                  >
                     <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={item.src}
                      alt="camera bag"
                      className=" object-cover"
                    />
                    </div>
                       <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/919447060659?text=${encodeURIComponent(
                            `Hi, I'm interested in this bag. Please provide more details.`,
                          )}`,
                          "_blank",
                        )
                      }
                      className="cursor-pointer bg-linear-to-br from-amber-700 to-amber-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#3F271A] transition-all duration-300 cusor-pointer"
                    >
                      ORDER NOW
                    </button>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindPerfectCarry