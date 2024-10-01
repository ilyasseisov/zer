// fc
import { FC } from "react";
// components
import HoverLines from "./ui/HoverLines";
const Clients: FC = () => {
  return (
    <section className="grid h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center md:px-0">
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full pl-4 font-stolzl font-normal text-grey md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
          CLIENTS
        </h3>
        {/* lines */}
        <HoverLines
          lines={[
            { text: "ARCHALYK", hover: "WATER" },
            { text: "HASAR", hover: "CANDIES" },
            { text: "MICROSOFT", hover: "SOFTWARE" },
            { text: "STARBUCKS", hover: "COFFEE" },
            { text: "PIXEL 55", hover: "DESIGN" },
          ]}
        />
      </div>
    </section>
  );
};

export default Clients;
