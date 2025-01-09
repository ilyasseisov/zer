"use client";
// fc
import { FC } from "react";
// components
import Paragraph from "../ui/Paragraph";

// types
type TestimonialsMaskProps = {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const TestimonialsMask: FC<TestimonialsMaskProps> = ({ setIsHovered }) => {
  // hooks
  // local variables
  // functions
  // return
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
        <div className="col-span-12 flex w-full flex-col items-start justify-center text-white md:col-span-10 xl:col-span-8">
          <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
            WHAT THEY SAID
          </h3>
          <div className="slider grid w-full grid-cols-12">
            <div className="reviews col-span-9 flex flex-col items-center gap-y-8">
              {/* 1 */}
              <div className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-dark border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40">
                <Paragraph
                  textDark
                  quoteDark
                  className="mb-10 md:mb-16 xl:mb-24"
                  setIsHovered={setIsHovered}
                >
                  I am his old friend. He made say nice things about him.
                </Paragraph>
                {/* signature */}
                <div className="mb-1 font-stolzl text-[20px] font-normal text-dark opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                  Alexander Doe
                </div>
                <div className="font-stolzl text-[16px] font-normal text-dark opacity-60 md:text-[18px] xl:text-[20px]">
                  CEO - Pixel Design
                </div>
              </div>

              {/* 2 */}
              <div className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-dark border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40">
                <Paragraph
                  textDark
                  quoteDark
                  className="mb-10 md:mb-16 xl:mb-24"
                  setIsHovered={setIsHovered}
                >
                  They finally make it work after countless rounds of feedback.
                </Paragraph>
                {/* signature */}
                <div className="mb-1 font-stolzl text-[20px] font-normal text-dark opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                  Alexander Doe
                </div>
                <div className="font-stolzl text-[16px] font-normal text-dark opacity-60 md:text-[18px] xl:text-[20px]">
                  CEO - Pixel Design
                </div>
              </div>

              {/* 3 */}
              <div className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-dark border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40">
                <Paragraph
                  textDark
                  quoteDark
                  className="mb-10 md:mb-16 xl:mb-24"
                  setIsHovered={setIsHovered}
                >
                  Haha! My six year old sister can do better than these guys.
                </Paragraph>
                {/* signature */}
                <div className="mb-1 font-stolzl text-[20px] font-normal text-dark opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                  Alexander Doe
                </div>
                <div className="font-stolzl text-[16px] font-normal text-dark opacity-60 md:text-[18px] xl:text-[20px]">
                  CEO - Pixel Design
                </div>
              </div>
            </div>
            {/* avatars */}
            <div className="col-span-3 h-[100vh]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsMask;
