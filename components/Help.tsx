// fc
import { FC, useState } from "react";
// components
import HireUsButton from "./ui/HireUsButton";
// useRef
import { useRef } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin
gsap.registerPlugin(ScrollTrigger);
const Help: FC = () => {
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
        // delay: -0.75,
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
  // return
  return (
    <section id="help" className="h-screen bg-dark">
      <div
        ref={containerRef}
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <div data-word-container>
          <h3
            data-word
            className="text-20px-capsized md:text-32px-capsized mb-8 text-center font-stolzl font-normal text-grey md:mb-16"
          >
            WE ARE HERE FOR YOU
          </h3>
        </div>
        <h2 className="mb-16 flex flex-col gap-y-4">
          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white"
            >
              WE HELP
            </span>
          </div>

          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white"
            >
              TURN YOUR
            </span>
          </div>

          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-purple-light"
            >
              IDEAS
            </span>
          </div>

          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white"
            >
              INTO
            </span>
          </div>

          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-purple-light"
            >
              REALITY
            </span>
          </div>
        </h2>
        <div data-word-container>
          <div data-word>
            <HireUsButton bgColor="bg-purple-dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
