// fc
import { FC } from "react";
// components
import HoverLines from "./ui/HoverLines";
import Earth from "./3d/Earth";
// types
type HoverProps = {
  setIsHoveredSize0: (value: boolean) => void;
};
const Clients: FC<HoverProps> = ({ setIsHoveredSize0 }) => {
  return (
    <section className="relative grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center md:px-0">
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white">
        <h3 className="text-20px-capsized md:text-32px-capsized relative z-10 mb-8 w-full pl-4 font-stolzl font-normal text-grey md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
          CLIENTS
        </h3>
        {/* lines */}
        <HoverLines
          setIsHoveredSize0={setIsHoveredSize0}
          lines={[
            { text: "ARCHALYK", hover: "DRINKS" },
            { text: "HASAR", hover: "CANDIES" },
            { text: "TAZE AY", hover: "FOOD" },
            { text: "SENCOMFORT", hover: "HYGIENE" },
            { text: "DD", hover: "BRICKS" },
            { text: "SHABAKJA", hover: "FOOD" },
          ]}
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-full">
        <Earth />
      </div>
    </section>
  );
};

export default Clients;
