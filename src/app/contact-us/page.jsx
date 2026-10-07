"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contactbanner from "../../assets/contactbanner1.webp"
import { MapPin, Phone, MessageCircle } from "lucide-react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919876543210";

    const message = `
Hi Unique Bags,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section >
        <div className="w-full sm:h-[400px] md:h-[500px] lg:h-[700px]">
                <Image
                  src={Contactbanner}
                  alt=" contact form"
                  className="lg:w-full lg:h-full object-cover"
                />
              </div>
       
      <div className="container mx-auto px-5 lg:px-0 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
  <p className="text-[#8A6348] uppercase tracking-[3px] text-sm font-semibold mb-4">
    Get In Touch
  </p>

  <h2 className="text-4xl lg:text-5xl font-serif text-[#4A2F20] leading-tight">
    We Fulfill
    <br />
    <span className="italic">Your Style</span>
  </h2>

  <p className="mt-6 text-[#765D4D] leading-7 max-w-lg">
    Have a question, need a custom bag, or looking for more
    information about our products? Get in touch with us and our
    team will be happy to help you find the right bag for your needs.
  </p>

  {/* Contact Details */}
  <div className="mt-8 space-y-5">

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-11 h-11 rounded-full bg-[#F3E8DD] flex items-center justify-center">
        <MapPin className="w-5 h-5 text-[#8A6348]" />
      </div>

      <div>
        <p className="text-[#4A2F20] font-semibold mb-1">
          Visit Us
        </p>

        <p className="text-[#765D4D] leading-6">
          Uthiyathode P.O., NH66
          <br />
          Door No: 6/391, Piller No: 234
          <br />
          Kodamthuruth, Chammanadu
          <br />
          Kerala – 688533
        </p>
      </div>
    </div>

    {/* Phone */}
    <a
      href="tel:+919447060659"
      className="flex items-center gap-4 group"
    >
      <div className="shrink-0 w-11 h-11 rounded-full bg-[#F3E8DD] flex items-center justify-center group-hover:bg-[#8A6348] transition-colors">
        <Phone className="w-5 h-5 text-[#8A6348] group-hover:text-white transition-colors" />
      </div>

      <div>
        <p className="text-[#4A2F20] font-semibold">
          Call Us
        </p>
        <p className="text-[#765D4D] group-hover:text-[#8A6348]">
          +91 94470 60659
        </p>
      </div>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919447060659?text=Hi%20Unique%20Bags%2C%20I%20would%20like%20to%20know%20more%20about%20your%20bags."
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
    >
      <div className="shrink-0 w-11 h-11 rounded-full bg-[#F3E8DD] flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
        <MessageCircle className="w-5 h-5 text-[#8A6348] group-hover:text-white transition-colors" />
      </div>

      <div>
        <p className="text-[#4A2F20] font-semibold">
          WhatsApp
        </p>
        <p className="text-[#765D4D] group-hover:text-[#25D366]">
          +91 94470 60659
        </p>
      </div>
    </a>

  </div>
</div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm">

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8F3ED] border border-[#E6D8C9] rounded-xl px-5 py-4 outline-none text-[#4A2F20] placeholder:text-[#9A8879] focus:border-[#8A6348]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8F3ED] border border-[#E6D8C9] rounded-xl px-5 py-4 outline-none text-[#4A2F20] placeholder:text-[#9A8879] focus:border-[#8A6348]"
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#F8F3ED] border border-[#E6D8C9] rounded-xl px-5 py-4 outline-none text-[#4A2F20] placeholder:text-[#9A8879] focus:border-[#8A6348]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#F8F3ED] border border-[#E6D8C9] rounded-xl px-5 py-4 outline-none text-[#4A2F20] placeholder:text-[#9A8879] focus:border-[#8A6348]"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#F8F3ED] border border-[#E6D8C9] rounded-xl px-5 py-4 outline-none resize-none text-[#4A2F20] placeholder:text-[#9A8879] focus:border-[#8A6348]"
              />
                <div className="w-full bg-[#5A3825] text-white py-4 rounded-xl font-semibold tracking-wide hover:bg-[#3F271A] transition-all duration-300 flex items-center justify-center">
              <a  href="mailto:leemageorge555@gmail.com?subject=Enquiry%20from%20Unique%20Bags%20Website"
                className=""
              >
                SEND MESSAGE
              </a>
            </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;