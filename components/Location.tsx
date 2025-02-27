// fc
import { FC } from "react";
// next image
import Image from "next/image";
// useRef
import { useRef } from "react";
// useEffect
import { useEffect } from "react";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// components

// types
type LoadingProps = {
  isLoading?: boolean;
};

const Location: FC<LoadingProps> = ({ isLoading }) => {
  // hooks
  // useRef
  const containerRef = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  // useGSAP
  useGSAP(
    () => {
      //
      if (containerRef.current) {
        gsap.set(containerRef.current, { opacity: 0 });
      }

      tl.current = gsap.timeline({ paused: true }).to(containerRef.current, {
        opacity: 1,
        duration: 1.25,
        ease: "sine.inOut",
        delay: 0,
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

  // return
  return (
    <>
      <aside
        id="location"
        ref={containerRef}
        className="fixed bottom-12 right-8 z-[10001] hidden xl:bottom-16 xl:right-16 xl:block"
      >
        <div className="link font-stolzl text-[22px] font-normal">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            className="link__svg"
          >
            <path
              id="link-circle"
              className="link__path"
              d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              stroke="none"
              fill="none"
            />

            <g transform="translate(100, 100)">
              <path
                className="link__star"
                fill="#fff"
                d="M20 40c1.304 0 2.373-.96 2.554-2.317 1.794-12.09 3.442-13.773 15.073-15.095C38.967 22.425 40 21.303 40 20c0-1.321-1.014-2.407-2.355-2.606-11.558-1.611-12.99-3.023-15.09-15.095C22.318.959 21.285 0 20 0c-1.322 0-2.373.96-2.59 2.317-1.758 12.072-3.406 13.756-15.019 15.077C1.014 17.574 0 18.66 0 20c0 1.303.978 2.39 2.355 2.588 11.576 1.647 12.99 3.04 15.054 15.113C17.681 39.06 18.732 40 20 40Z"
                transform="translate(-20, -20)"
              />
            </g>
            <text className="link__text">
              <textPath href="#link-circle" stroke="none">
                &bull; BASED IN &bull; DUBAI & ASHGABAT
              </textPath>
            </text>
          </svg>
        </div>
      </aside>
    </>
  );
};
export default Location;
