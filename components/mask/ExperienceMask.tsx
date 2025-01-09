"use client";
// fc
import { FC } from "react";
// components
import Paragraph from "../ui/Paragraph";

// types
type ExperienceMaskProps = {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExperienceMask: FC<ExperienceMaskProps> = ({ setIsHovered }) => {
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
              EXPERIENCE
            </h3>
            <Paragraph textDark>
              We Photoshop stock images and Freepik vectors. Build websites with
              ChatGPT and AI. All our employees graduated from YouTube
              university
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceMask;
