"use client";

// fc
import { FC } from "react";
// components
import Paragraph from "./ui/Paragraph";

const About: FC = () => {
  // hooks

  // local variables
  // return
  return (
    <>
      <section className="grid h-[600px] grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 sm:h-[720px] md:h-[840px] md:px-0 xl:h-[1200px]">
        <div className="col-span-12 flex w-full flex-col items-start justify-start py-28 text-white md:col-span-10 md:py-32 xl:col-span-8 xl:py-40">
          <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
            ABOUT US
          </h3>
          <Paragraph highlightWords={[2, 3]}>
            We are creative agency focused on 2D & 3D graphics, web design &
            development, modern motion design and digital marketing for any
            niche
          </Paragraph>
        </div>
      </section>
    </>
  );
};

export default About;
