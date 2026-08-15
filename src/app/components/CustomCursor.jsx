'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import cursor from "../../assets/logo.webp"
const CustomCursor = () => {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect((e)=>{
        const moveCursor = (e) =>{
            setPosition({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("mousemove",moveCursor)
        return () => {
            window.removeEventListener("mousemove",moveCursor)
        }
    },[])
  return (
    <div>
      <Image
        src={cursor}
        alt="cursor"
        className="fixed pointer-events-none z-[99999] w-24 h-20 object-contain"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default CustomCursor