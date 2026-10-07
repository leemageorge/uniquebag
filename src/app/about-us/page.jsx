'use client';
import Image from "next/image";
import React from "react";
import AboutBanner from "../../assets/aboutBanner.webp";
import SkillData from "../components/SkillData";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      <div className="w-full sm:h-[400px] md:h-[500px] lg:h-[700px]">
        <Image
          src={AboutBanner}
          alt=" About Banner"
          className="lg:w-full lg:h-full object-cover"
        />
      </div>
      <SkillData />
      <div className="container mx-auto px-4 lg:px-0 mt-20 space-y-5 ">
        <motion.h2 className="text-center text-xl font-bold uppercase tracking-tighter"
          initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
             transition={{
               duration: 0.5,
               ease: "easeOut",
             }}
        >
          Beyond the Dream, Since 2004
        </motion.h2>
        <motion.h3 className="text-center text-4xl font-bold uppercase tracking-[2px]"
        initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
             transition={{
               duration: 0.5,
               ease: "easeOut",
             }}>
          Uniquely Crafted Built to Last
        </motion.h3>
        <motion.p className="text-lg leading-[30px] text-gray-500"
        initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{
               duration: 0.5,
               ease: "easeOut",
             }}>
          Since 2004 Unique Bags has had a vision. To make bags that are not
          only useful but also show quality, uniqueness and long-lasting work.
          What started as a dream based on love and hard work has become a name
          people trust in the bag making business. This trust comes from years
          of work, ideas and a wish to do the best. Over the years we have made
          kinds of bags to fit the needs of todays life and work. From bags for
          traveling for college for school to bags for delivering things for
          cameras for tools for shopping and for instruments each bag is made
          with a clear goal of being useful strong and easy to use. At Unique
          Bags we think that a good bag is more than something you carry. It
          becomes part of your trip your job, your daily life and your memories.
          That is why each product is made with care thinking about the
          materials the way it is made how comfortable it is, how much it can
          hold, how easy it is to use and how it looks today. Our two decades of
          work have shown us that good quality comes from doing things the way
          each time. We keep up with styles, new designs and what customers want
          while keeping the skills and reliability that have been part of our
          journey since 2004. From an idea to a bag each one shows our promise
          to do things right with care and, with a purpose. 20+ Years of Making
          Things Well. One Special Name.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutPage;
