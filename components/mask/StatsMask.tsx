"use client";

import { FC } from "react";
import NumberFlow from "@number-flow/react";

// types
type StatsMaskProps = {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatsMask: FC<StatsMaskProps> = ({ setIsHovered }) => {
  // Stats data for easy maintenance
  const statsData = [
    { value: 6, label: "FANCY STICKERS" },
    { value: 66, label: "PRICY WRAPPING" },
    { value: 21, label: "HYPED ANIMATIONS" },
    { value: 4, label: "ANOTHER TEMPLATE" },
    { value: 6, label: "MEMES" },
    { value: 9, label: "FREE PENS & PADS" },
  ];

  return (
    <section className="grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="col-span-12 flex w-full flex-col items-start justify-start py-28 text-dark md:col-span-10 md:py-32 xl:col-span-8 xl:py-40"
      >
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
          PROJECTS WE&apos;VE BUILT
        </h3>
        <div className="grid w-full grid-cols-12 gap-x-4 gap-y-8 xl:gap-y-16 2xl:gap-y-24">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4"
            >
              <div
                data-counter
                className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8"
              >
                <NumberFlow value={stat.value} />
                <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl font-normal opacity-60">
                  {stat.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMask;
