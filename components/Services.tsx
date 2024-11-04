// fc
import { FC } from "react";
// components
import HoverLines from "./ui/HoverLines";

// types
type HoverProps = {
  setIsHoveredSize0: (value: boolean) => void;
};

const Services: FC<HoverProps> = ({ setIsHoveredSize0 }) => {
  return (
    <section className="grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center md:px-0">
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full pl-4 font-stolzl font-normal text-grey md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
          WHAT WE DO
        </h3>
        {/* lines */}
        <HoverLines
          setIsHoveredSize0={setIsHoveredSize0}
          lines={[
            { text: "2D & 3D", hover: "GRAPHICS" },
            { text: "MOTION", hover: "VIDEOS" },
            { text: "WEB DESIGN", hover: "WEBSITES" },
            { text: "WEB DEV", hover: "APPS" },
            { text: "MARKETING", hover: "SEO SMM PPC" },
          ]}
        />
      </div>
    </section>
  );
};

export default Services;
