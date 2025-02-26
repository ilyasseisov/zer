"use client";

import { FC, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NumberFlow, { continuous } from "@number-flow/react";

gsap.registerPlugin(ScrollTrigger);

const Stats: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Stats data for easy maintenance
  const statsData = [
    { value: 6, label: "BRANDING" },
    { value: 66, label: "PACKAGING" },
    { value: 21, label: "MOTION DESIGNS" },
    { value: 4, label: "WEBSITES & APPS" },
    { value: 6, label: "SMM" },
    { value: 9, label: "EXHIBITION" },
  ];

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true }).from("[data-counter]", {
        opacity: 1,
        duration: 0.1,
        ease: "sine.inOut",
        onComplete: () => setIsAnimating(true),
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        markers: true,
        onEnter: () => {
          if (tl.current) {
            tl.current.play();
          }
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
      <div
        ref={containerRef}
        className="col-span-12 flex w-full flex-col items-start justify-start py-28 text-white md:col-span-10 md:py-32 xl:col-span-8 xl:py-40"
      >
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
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
                <NumberFlow
                  value={isAnimating ? stat.value : 1}
                  trend={1}
                  plugins={[continuous]}
                  willChange
                  transformTiming={{ duration: 0, easing: "ease-out" }}
                  spinTiming={{ duration: 4000, easing: "ease-out" }}
                  opacityTiming={{ duration: 400, easing: "ease-out" }}
                />
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

export default Stats;
