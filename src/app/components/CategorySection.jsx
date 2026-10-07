"use client";
import Image from "next/image";
import React from "react";
import Guitarmodel from "../../assets/musicInstrument/modelwithguitar.webp";
import model2withviolin from "../../assets/musicInstrument/model2withviolin.webp";
import model3withkeyboard from "../../assets/musicInstrument/model3withkeyboard.webp";
import { motion } from "framer-motion";
const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 pt-10 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className=" flex flex-col justify-center  min-h-[300px]">
          <h6 className="text-[#8E4A1A] uppercase tracking-[3px] mb-4 text-center md:text-left">
            Premium Instrument Bags
          </h6>

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-2xl md:text-3xl font-[500] text-center md:text-left uppercase  mb-8"
          >
            Protecting Every Instrument With Precision
          </motion.h2>

          <motion.button
            className="w-fit place-self-center md:place-self-start rounded-full bg-gradient-to-br from-[#DFD9AB] to-[#F1C1A9] px-8 py-3 font-bold uppercase text-[#532505] shadow-lg transition hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            Get Yours Today
          </motion.button>
        </div>

        <motion.div
          className="overflow-hidden rounded-2xl min-h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={Guitarmodel}
            alt="Guitar Bag"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl min-h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={model2withviolin}
            alt="Violin Bag"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl min-h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={model3withkeyboard}
            alt="Keyboard Bag"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CategorySection;
