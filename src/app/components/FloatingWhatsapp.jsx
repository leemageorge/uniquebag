"use client";

import Image from "next/image";

const FloatingWhatsApp = () => {
  const message = encodeURIComponent(
    "Hi Unique Bags, I would like to know more about your bags."
  );

  return (
    <a
      href={`https://wa.me/919447060659?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.svg"
        width={56}
        height={56}
        alt="WhatsApp"
      />
    </a>
  );
};

export default FloatingWhatsApp;