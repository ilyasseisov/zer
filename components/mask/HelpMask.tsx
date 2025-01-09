"use client";
// fc
import { FC } from "react";
// useRef
import { useRef } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import HireUsButton from "../ui/HireUsButton";

// types
type HelpMaskProps = {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

// register plugin
gsap.registerPlugin(ScrollTrigger);
const HelpMask: FC<HelpMaskProps> = ({ setIsHovered }) => {
  // hooks
  // useRef
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // useGSAP
  useGSAP(
    () => {
      //
      //
      gsap.set("[data-word]", { y: 120 });

      tl.current = gsap.timeline({ paused: true }).to("[data-word]", {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "sine.inOut",
        // delay: -0.25,
      });
      //
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom bottom",
        // markers: true,
        onEnter: () => {
          if (tl.current) {
            tl.current.play(); // Start the timeline when the trigger enters
          }
        },
      });
      //
    },
    { scope: containerRef },
  );
  // local variables
  // functions
  // return
  return (
    <>
      <section
        id="help-mask"
        ref={containerRef}
        className="flex h-screen w-full flex-col items-center justify-center bg-purple-light"
      >
        <div
          className="text-center"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div data-word-container>
            <h3
              data-word
              className="text-20px-capsized md:text-32px-capsized mb-8 text-center font-stolzl font-normal text-dark md:mb-16"
            >
              IN REALITY
            </h3>
          </div>
          <h2 className="mb-16 flex flex-col gap-y-4">
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                WE DO
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                WHATEVER
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                YOU
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                PAY
              </span>
            </div>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
            >
              FOR
            </span>
          </h2>
          <HireUsButton bgColor="bg-dark" />
        </div>
      </section>
    </>
  );
};

export default HelpMask;
