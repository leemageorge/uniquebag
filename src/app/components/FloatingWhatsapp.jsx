"use client";

import { ChartArea, PhoneCall } from "lucide-react";
import React from "react";


const FloatingWhatsApp = () => {
  const whatsappNumber = "919876543210";

  const message = encodeURIComponent(
    "Hi Unique Bags, I would like to know more about your bags."
  );

  return (
    <a
      href={`https://wa.me/${919447060659}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <PhoneCall  className="text-white text-3xl" />
    </a>
  );
};

export default FloatingWhatsApp;