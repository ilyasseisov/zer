// fc
import { FC } from "react";
// next
import dynamic from "next/dynamic";
// components
import HoverLines from "./ui/HoverLines";
// dynamic components
const RubiksCube = dynamic(() => import("@/components/3d/RubiksCube"), {
  ssr: false,
});
const Baseball = dynamic(() => import("@/components/3d/Baseball"), {
  ssr: false,
});
// types
type HoverProps = {
  setIsHoveredSize0: (value: boolean) => void;
};

const Services: FC<HoverProps> = ({ setIsHoveredSize0 }) => {
  return (
    <section className="relative grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center overflow-x-hidden md:px-0">
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full pl-4 font-stolzl font-normal text-grey md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
          WHAT WE DO
        </h3>
        {/* lines */}
        <HoverLines
          setIsHoveredSize0={setIsHoveredSize0}
          lines={[
            { text: "WEB DEV", hover: "APPS & SAAS" },
            { text: "WEB DESIGN", hover: "U C OUR WORK" },
            { text: "MOTION", hover: "3D & 2D" },
            { text: "MARKETING", hover: "DIGITAL" },
            { text: "GRAPHICS", hover: "DESIGN" },
            { text: "BRANDING", hover: "LOGOS & ..." },
          ]}
        />
      </div>
      {/* rubiks cube */}
      <div className="absolute z-[10002] hidden h-[240px] w-[240px] md:left-[-200px] md:top-20 md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px] xl:left-[-240px] xl:top-2 xl:block xl:h-[480px] xl:w-[480px] 2xl:-top-20 2xl:left-[-320px] 2xl:h-[640px] 2xl:w-[640px]">
        <RubiksCube />
      </div>
      {/* END rubiks cube */}
      {/* baseball */}
      <div className="absolute z-[10002] hidden h-[240px] w-[240px] md:bottom-20 md:right-[-200px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px] xl:bottom-2 xl:right-[-240px] xl:block xl:h-[480px] xl:w-[480px] 2xl:-bottom-20 2xl:right-[-320px] 2xl:h-[640px] 2xl:w-[640px]">
        <Baseball />
      </div>
      {/* END baseball */}
    </section>
  );
};

export default Services;
