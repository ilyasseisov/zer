"use client";

// fc
import { FC } from "react";
// useRef
import { useRef } from "react";
// next image
import Image from "next/image";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// components
import Paragraph from "./ui/Paragraph";
// images
import images from "../public/img";
// types
type HoverProps = {
  setIsHoveredSize0: (value: boolean) => void;
};
// register plugin
gsap.registerPlugin(ScrollTrigger);
const Testimonials: FC<HoverProps> = ({ setIsHoveredSize0 }) => {
  // hooks
  // useRef
  const containerRef = useRef<HTMLDivElement>(null);
  // useGSAP
  useGSAP(() => {
    const scrollSections = gsap.utils.toArray(
      "[data-section]",
    ) as HTMLElement[];
    const links = gsap.utils.toArray(".avatar") as HTMLElement[];

    links[0].classList.add("active");

    scrollSections.forEach((section, i) => {
      const link = links[i];
      ScrollTrigger.create({
        trigger: section,
        start: "top-=300 top",
        end: "bottom-=270 top",
        onEnter: () => link.classList.add("active"),
        onEnterBack: () => link.classList.add("active"),
        onLeave: () => {
          if (links[2].classList.contains("active")) return;
          link.classList.remove("active");
        },
        onLeaveBack: () => {
          if (links[0].classList.contains("active")) return;
          link.classList.remove("active");
        },
        pin: false,
        // markers: { indent: 150 * i },
        // id: i + 1,
      });
    });
    ScrollTrigger.create({
      trigger: ".avatars",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".reviews",
      pin: true,
      pinSpacing: false,
      // markers: true,
    });
  });
  // return
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white md:col-span-10 xl:col-span-8">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
          WHAT THEY SAID
        </h3>
        <div ref={containerRef} className="slider grid w-full grid-cols-12">
          <div className="reviews col-span-9 flex flex-col items-center gap-y-8">
            {/* 1 */}
            <div
              data-section
              className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-grey border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40"
            >
              <Paragraph quote className="mb-10 md:mb-16 xl:mb-24">
                The secret ingredient to Archalyk's success story!
              </Paragraph>
              {/* signature */}
              <div className="mb-1 font-stolzl text-[20px] font-normal opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                Myahri Garajanova
              </div>
              <div className="font-stolzl text-[16px] font-normal opacity-60 md:text-[18px] xl:text-[20px]">
                Head of the Export Dept - Archalyk
              </div>
            </div>

            {/* 2 */}
            <div
              data-section
              className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-grey border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40"
            >
              <Paragraph quote className="mb-10 md:mb-16 xl:mb-24">
                With Zer we turned our focus to what truly matters.
              </Paragraph>
              {/* signature */}
              <div className="mb-1 font-stolzl text-[20px] font-normal opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                Yakub Ashirov
              </div>
              <div className="font-stolzl text-[16px] font-normal opacity-60 md:text-[18px] xl:text-[20px]">
                Deputy Head of Sales Department - Hasar
              </div>
            </div>

            {/* 3 */}
            <div
              data-section
              className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-grey border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40"
            >
              <Paragraph quote className="mb-10 md:mb-16 xl:mb-24">
                Zer went above and beyond to meet our hopes all the way.
              </Paragraph>
              {/* signature */}
              <div className="mb-1 font-stolzl text-[20px] font-normal opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                Gadam Hoshvagtov
              </div>
              <div className="font-stolzl text-[16px] font-normal opacity-60 md:text-[18px] xl:text-[20px]">
                CEO - Dovletli Dovran
              </div>
            </div>
          </div>
          {/* avatars */}
          <div
            onMouseEnter={() => setIsHoveredSize0(true)}
            onMouseLeave={() => setIsHoveredSize0(false)}
            className="avatars relative z-[10001] col-span-3 flex h-[100vh] flex-col items-end justify-center"
          >
            <div className="relative flex h-[234px] w-[64px] flex-col items-end justify-center gap-y-5 md:h-[328px] md:w-[96px] xl:h-[402px] xl:w-[120px]">
              <div className="avatar h-[64px] w-[64px] md:h-[96px] md:w-[96px] xl:h-[120px] xl:w-[120px]">
                <Image
                  alt="person"
                  src={images.person1}
                  width={120}
                  height={120}
                />
              </div>
              <div className="avatar h-[64px] w-[64px] md:h-[96px] md:w-[96px] xl:h-[120px] xl:w-[120px]">
                <Image
                  alt="person"
                  src={images.person2}
                  width={120}
                  height={120}
                />
              </div>
              <div className="avatar h-[64px] w-[64px] md:h-[96px] md:w-[96px] xl:h-[120px] xl:w-[120px]">
                <Image
                  alt="person"
                  src={images.person3}
                  width={120}
                  height={120}
                />
              </div>
              <div className="marker"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
