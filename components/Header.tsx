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
// images
import images from "../public/img";
// types
type LoadingProps = {
  isLoading?: boolean;
};

const Header: FC<LoadingProps> = ({ isLoading }) => {
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
    <header ref={containerRef} className="fixed top-0 z-[10003] w-full">
      <div className="flex w-full items-center justify-between px-4 py-6 text-3xl md:px-8 md:py-12 xl:px-16 xl:py-16">
        <div className="logo h-[40px] w-[73px] md:h-[60px] md:w-[109.5px]">
          <Image alt="logo" src={images.logo} width={146} height={80} />
        </div>
        <p className="text-20px-capsized md:text-28px-capsized font-stolzl font-normal text-white">
          HIRE US
        </p>
      </div>
    </header>
  );
};

export default Header;
