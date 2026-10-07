"use client";
import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { musicInsrumentData } from "@/data/musicInsrumentData";
import { motion } from "framer-motion";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const Collections = () => {
  return (
    <motion.div className=" container mx-auto px-4 md:px-0 pt-10 lg:pt-20 ">
      <div
        className={`${roboto.className} flex flex-col md:flex-row items-center justify-between gap-6`}
      >
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-5xl font-extrabold -tracking-[2px]"
        >
          Essentials Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="max-w-md text-lg tracking-tight text-gray-500"
        >
          An exclusive collection of music instrument bags crafted to protect
          what matters most. Designed for superior protection, lasting
          durability, and effortless portability for musicians on the move.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:gris-cols-3 lg:grid-cols-4 gap-6 pt-20 place-items-center ">
        {musicInsrumentData.map((instrument, index) => (
          <motion.div
            key={index}
            className="bg-[#EFE4D6] rounded-2xl p-8  flex flex-col items-center justify-center w-96 h-96"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Image
              src={instrument.src}
              alt={instrument.heading}
              className="w-full h-full object-contain "
            />
            <div
              className={`${roboto.className} text-md font-bold text-center text-[#b4540f]} uppercase 
                    py-2`}
            >
              {" "}
              {instrument.heading}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="">
        <motion.h3 className="text-xl lg:text-3xl  text-center mt-20 italic opacity-40 "
          initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
             transition={{
               duration: 0.5,
               ease: "easeOut",
             }}>
          Premium Instrument Bag Collection{" "}
        </motion.h3>
        <motion.h1 className="text-6xl lg:text-9xl text-center text-transparent tracking-wider [-webkit-text-stroke:2px_#532505] uppercase opacity-40 font-extrabold tracking-tighter"
          initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
             transition={{
               duration: 0.5,
               ease: "easeOut",
             }}>
          Unique Bags
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Collections;
