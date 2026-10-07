import { skilledData } from "@/data/data";
import React from "react";
import {
  BadgeCheck,
  Heart,
  Briefcase,
  Handshake,
} from "lucide-react";

const icons = {
  BadgeCheck,
  Heart,
  Briefcase,
  Handshake,
};

const SkillData = () => {
  return (
    <div className="bg-[#EFE4D6] px-4 lg:px-0 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skilledData.map((skill, index) => {
          const Icon = icons[skill.icon];

          return (
            <div key={index} className="flex items-center gap-4">
              <div>
                {Icon && (
                  <Icon className="w-10 h-10 text-[#C89B5A]" />
                )}
              </div>

              <div className="space-y-0.5">
                <h4 className="uppercase tracking-[2px] text-md font-semibold">
                  {skill.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {skill.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillData;