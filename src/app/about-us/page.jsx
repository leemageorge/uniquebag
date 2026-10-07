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
      {/* <FeatureData /> */}
      <div className="container mx-auto px-4 lg:px-0 mt-20 space-y-5 ">
        <h2 className="text-center text-xl font-bold uppercase tracking-tighter">
          Beyond the Dream, Since 2004
        </h2>
        <h3 className="text-center text-4xl font-bold uppercase tracking-[2px]">
          Uniquely Crafted Built to Last
        </h3>
        <p className="text-lg leading-[30px] text-gray-500">
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
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
