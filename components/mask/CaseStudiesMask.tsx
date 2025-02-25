"use client";
// fc
import { FC } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// types
type CaseStudiesMaskProps = {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const CaseStudiesMask: FC<CaseStudiesMaskProps> = ({ setIsHovered }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const containerRef = useRef(null);

  // These need to be in component scope
  let xPercent = 0;
  let direction = -1;

  gsap.registerPlugin(ScrollTrigger);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  useGSAP(
    () => {
      // The exact same animation setup as your original code
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 2,
          start: "top center",
          end: "bottom bottom",
          onUpdate: (e) => {
            direction = e.direction * -1;
          },
          // markers: true,
        },
        x: "-500px",
      });

      requestAnimationFrame(animate);
    },
    { dependencies: [] },
  ); // Empty dependencies array to mimic useEffect behavior

  return (
    <main
      ref={containerRef}
      className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-purple-light"
    >
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        ref={slider}
        className="relative whitespace-nowrap"
      >
        <p
          className="relative m-0 pr-[50px] font-stolzl text-[80px] font-medium tracking-widest text-dark md:text-[100px] xl:text-[120px] 2xl:text-[160px]"
          ref={firstText}
        >
          <a target="_blank" href="https://zer.design/case-studies">
            CLICK TO SEE &bull; CLICK TO SEE &bull;
          </a>
        </p>
        <p
          className="absolute left-full top-0 m-0 pr-[50px] font-stolzl text-[80px] font-medium tracking-widest text-dark md:text-[100px] xl:text-[120px] 2xl:text-[160px]"
          ref={secondText}
        >
          <a target="_blank" href="https://zer.design/case-studies">
            CLICK TO SEE &bull; CLICK TO SEE &bull;
          </a>
        </p>
      </div>
    </main>
  );
};

export default CaseStudiesMask;
