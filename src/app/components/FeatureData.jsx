import { featuredData } from "@/data/data";
import {
  Gem,
  Hammer,
  ShieldCheck,
  Settings2,
} from "lucide-react";

const icons = {
  Gem,
  Hammer,
  ShieldCheck,
  Settings2,
};

const FeatureData = () => {
  return (
    <div className="bg-[#EFE4D6] px-4 lg:px-0 py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredData.map((feature, index) => {
        const Icon = icons[feature.icon];

        return (
          <div key={index} className="flex items-center gap-4">
            <div>
              <Icon className="w-10 h-10 text-[#C89B5A]" />
            </div>

            <div className="space-y-0.5">
              <h4 className="uppercase tracking-[2px] text-md font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default FeatureData;