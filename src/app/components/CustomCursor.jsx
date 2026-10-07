"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import cursor from "../../assets/logo.webp";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      // Dot follows mouse immediately
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    const followMouse = () => {
      setImagePosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.08,
        y: prev.y + (position.y - prev.y) * 0.08,
      }));

      animationFrame = requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      {/* Mouse Dot */}
      <div
        className="fixed w-3 h-3 rounded-full bg-amber-950 pointer-events-none z-[999999]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Image Following Dot */}
     <Image
  src={cursor}
  alt="cursor"
  width={96}
  height={80}
  className="fixed pointer-events-none z-999999 object-contain"
  style={{
    left: imagePosition.x + 35,
    top: imagePosition.y + 25,
    transform: "translate(-50%, -50%)",
  }}
/>
    </>
  );
};

export default CustomCursor;