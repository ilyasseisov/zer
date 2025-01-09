"use client";
// fc
import { FC } from "react";
// components
import Paragraph from "../ui/Paragraph";

// types
type AboutMaskProps = {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutMask: FC<AboutMaskProps> = ({ setIsHovered }) => {
  // hooks
  // local variables
  // functions
  // return
  return (
    <>
      <section className="grid h-[600px] grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 sm:h-[720px] md:h-[840px] md:px-0 xl:h-[1200px]">
        <div className="col-span-12 flex w-full flex-col items-start justify-start py-28 md:col-span-10 md:py-32 xl:col-span-8 xl:py-40">
          <div
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
              ABOUT US
            </h3>
            <Paragraph textDark>
              We do 2D & 3D graphics because, everyone does it. We build
              websites like it’s rocket science (but totally isn’t). And pretend
              to know marketing
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMask;
