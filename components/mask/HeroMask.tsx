"use client";
// fc
import { FC } from "react";
// useRef
import { useRef } from "react";
// useEffect
import { useEffect } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// functions
import { handleScrollToFooter } from "@/lib/utils";

// types
type HeroMaskProps = {
  isLoading?: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroMask: FC<HeroMaskProps> = ({ setIsHovered, isLoading }) => {
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
        delay: 0.5,
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
  // functions
  // return
  return (
    <>
      <section
        id="hero-mask"
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
              ZER DESIGN
            </h3>
          </div>
          <h2 className="mb-16 flex flex-col gap-y-4">
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                JUST
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                CREATING
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                CONTENT
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                SINCE
              </span>
            </div>
            <div data-word-container>
              <span
                data-word
                className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark"
              >
                2020
              </span>
            </div>
          </h2>
        </div>
      </section>
    </>
  );
};

export default HeroMask;
