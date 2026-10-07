'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Announcement = () => {
  return (
    <div className='pt-20 container mx-auto flex flex-col items-center px-4 lg:px-0  '>
        
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-[#8E4A1A] uppercase tracking-[2px] mb-4 text-2xl"
      >
        Custom Bag made just for you
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-[#7A6658] text-md leading-[25px] mb-10"
      >
        We create custom bags that match your brand style and every requirement perfectly
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className='uppercase tracking-[2px] text-sm font-bold  bg-linear-to-br from-[#5B350A] to-[#EB932E] px-6 py-3 rounded-full text-white'
      >
        Get a quote
      </motion.button>
    </div>
  )
}

export default Announcement