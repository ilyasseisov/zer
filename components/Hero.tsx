"use client";

// fc
import { FC } from "react";
// components
import HireUsButton from "./ui/HireUsButton";
// useRef
import { useRef } from "react";
// useEffect
import { useEffect } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// types
type HeroProps = {
  isLoading: boolean;
};

const Hero: FC<HeroProps> = ({ isLoading }) => {
  // hooks
  // useRef
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  // useGSAP
  useGSAP(
    () => {
      //
      gsap.set("[data-word]", { y: 120 });

      tl.current = gsap.timeline({ paused: true }).to("[data-word]", {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "sine.inOut",
        delay: 1,
      });
      //
    },
    { scope: containerRef },
  );

  // useEffect
  useEffect(() => {
    if (!isLoading) {
      tl.current?.play();
    }
  }, [isLoading]);
  // local variables
  // return
  return (
    <section id="hero" className="h-screen bg-dark">
      <div
        ref={containerRef}
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <div data-word-container>
          <h3
            data-word
            className="text-20px-capsized md:text-32px-capsized mb-8 text-center font-stolzl font-normal text-grey md:mb-16"
          >
            ZER DESIGN
          </h3>
        </div>
        <h2 className="mb-16 flex flex-col gap-y-4">
          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white"
            >
              CRAFTING
            </span>
          </div>
          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-purple-light"
            >
              COOL
            </span>
          </div>
          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-purple-light"
            >
              BRANDS
            </span>
          </div>
          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white"
            >
              SINCE
            </span>
          </div>
          <div data-word-container>
            <span
              data-word
              className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white"
            >
              2020
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

export default Hero;
