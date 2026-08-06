'use client'
import { navbarLinks } from '@/data/data'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className=" containers mx-auto px-4 lg:px-0 py-4 ">
    <div className='md:hidden flex items-start gap-2 '>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (<X className=' text-[#9B7057] text-right'/>) :(<MenuIcon className=' text-[#9B7057]'/>)}
        </button>
        <span className='font-[500] tracking-[2px] text-gray-600'>UNIQUE BAGS</span>
     
    </div>
       {
      menuOpen && (
      <div className='flex flex-col items-center h-fit gap-6 pt-10 md:hidden'>
        {
          navbarLinks.map((navItem,index) => (
          <Link key={index} href={navItem.link} onClick={()=>setMenuOpen(false)}>{navItem.title}</Link >
          ))
        }
      </div>
      )
    }
    
      <div className='hidden md:flex items-center justify-between gap-10 '>
 {
        navbarLinks.map((link,index) =>(
          <Link key={index} href={link.link} className="hidden lg:block text-md uppercase tracking-[1.5px] font-[500] text-gray-700">
            {link.title}
          </Link>
        ))
      }
      </div>
     
    </nav>
  )
}

export default Navbar