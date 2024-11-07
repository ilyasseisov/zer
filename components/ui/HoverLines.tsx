"use client";

// fc
import { FC } from "react";
// useRef
import { useRef } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// types
type Text = {
  text: string;
  hover: string;
};
type HoverLinesProps = {
  lines: Text[];
  setIsHoveredSize0: (value: boolean) => void;
};

// register plugin
gsap.registerPlugin(ScrollTrigger);
const HoverLines: FC<HoverLinesProps> = ({ lines, setIsHoveredSize0 }) => {
  // hooks
  // useRef
  const containerRef = useRef<HTMLDivElement>(null);
  // useGSAP
  useGSAP(
    () => {
      //
      const textElements = gsap.utils.toArray("[data-text]") as HTMLElement[];
      //
      textElements.forEach((text) => {
        gsap.to(text, {
          backgroundSize: "100%",
          ease: "none",
          color: "white",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "center 20%",
            scrub: true,
            // markers: true,
          },
        });
      });
      //
    },
    { scope: containerRef },
  );
  // return
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <mask id="text-mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
          </mask>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className="relative z-[10001] flex w-full flex-col items-start"
      >
        {lines.map((line, index) => (
          <div
            data-text
            key={index}
            className="text-48px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized font-stolzl font-bold"
          >
            <p
              onMouseEnter={() => setIsHoveredSize0(true)}
              onMouseLeave={() => setIsHoveredSize0(false)}
            >
              {line.text}
            </p>
            <span className="bg-purple-light text-dark">{line.hover}</span>
            <div className="underline"></div>
            <div className="upperline"></div>
          </div>
        ))}
      </div>
    </>
  );
};
export default HoverLines;
