"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingScrollArrow = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={atTop ? "Scroll down" : "Scroll to top"}
      className="fixed right-6 bottom-24 z-50 w-14 h-14 rounded-full bg-amber-950 shadow-[2px_10px_10px_3px_rgba(0,0,0,0.5)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    >
      {atTop ? (
        <ChevronDown size={30} />
      ) : (
        <ChevronUp size={30} />
      )}
    </button>
  );
};

export default FloatingScrollArrow;