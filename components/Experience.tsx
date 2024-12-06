"use client";

// fc
import { FC } from "react";
// components
import Paragraph from "./ui/Paragraph";
const Experience: FC = () => {
  return (
    <section className="grid h-[600px] grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 sm:h-[720px] md:h-[840px] md:px-0 xl:h-[1200px]">
      <div className="col-span-12 flex w-full flex-col items-start justify-start py-28 text-white md:col-span-10 md:py-32 xl:col-span-8 xl:py-40">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
          EXPERIENCE
        </h3>
        <Paragraph highlightWords={[2, 3]}>
          Over a five years of experience in 2D & 3D design, web dev and digital
          marketing. Working with some of the most talented people in the
          business
        </Paragraph>
      </div>
    </section>
  );
};

export default Experience;
