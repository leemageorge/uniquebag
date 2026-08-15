import Image from "next/image";
import React from "react";
import AboutBanner from "../../assets/aboutBanner.webp";
import FeatureData from "../components/FeatureData";

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
       <FeatureData />
      <div className="container mx-auto px-4 lg:px-0 mt-20 space-y-5 ">
        <h2 className="text-center text-xl font-bold uppercase tracking-tighter">
          Beyond the Dream, Since 2004
        </h2>
        <h3 className="text-center text-4xl font-bold uppercase tracking-[2px]">
          Uniquely Crafted. Built to Last.
        </h3>
        <p className="text-lg leading-[30px] text-gray-500">
          Since 2004, Unique Bags has been driven by a simple vision — to create
          bags that are not only practical, but also reflect quality,
          individuality, and lasting craftsmanship. What began as a dream rooted
          in passion and dedication has grown into a trusted name in the bag
          manufacturing industry, built on years of experience, continuous
          innovation, and a commitment to excellence. Over the years, we have
          developed a diverse range of bags designed to meet the needs of modern
          lifestyles and professional requirements. From travel bags, college
          bags, and school bags to delivery bags, camera bags, tool bags, tote
          bags, and musical instrument bags, every product is created with a
          clear focus on functionality, durability, and ease of use. At Unique
          Bags, we believe that a great bag is more than just something you
          carry. It becomes part of your journey, your work, your everyday life,
          and your experiences. That is why every product is thoughtfully
          designed with attention to materials, construction, comfort, storage,
          usability, and contemporary style. Our two decades of experience have
          taught us that quality is built through consistency. We continue to
          embrace changing trends, modern designs, and evolving customer needs
          while preserving the craftsmanship and reliability that have shaped
          our journey since 2004. From an idea to a finished product, every bag
          carries our commitment to quality, precision, and purpose. 20+ Years
          of Craftsmanship. One Unique Identity.
        </p>
      </div>
   
    </div>
  );
};

export default AboutPage;
