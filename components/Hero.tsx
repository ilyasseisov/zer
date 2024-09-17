"use client";

// custom hook
import useMousePosition from "@/utils/useMousePosition";
// useState
import { useState } from "react";
// fc
import { FC } from "react";
// framer motion
import { motion } from "framer-motion";
// next image
import Image from "next/image";
// components
import HireUsButton from "./ui/HireUsButton";
// images
import images from "@/public/img";
const Hero: FC = () => {
  // hooks
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  // local variables
  const size = isHovered ? 600 : 60;
  // return
  return (
    <section className="h-screen bg-dark">
      {/* mask */}
      <motion.div
        className="mask-hero absolute flex h-full w-full flex-col items-center justify-center"
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - size / 2}px ${(y ?? 0) - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.75,
          velocity: 4,
        }}
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
          <h3 className="text-20px-capsized md:text-32px-capsized mb-8 text-center font-stolzl font-normal text-dark md:mb-16">
            ZER DESIGN
          </h3>
          <h2 className="mb-16 flex flex-col gap-y-4">
            <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
              COPYING
            </span>
            <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
              BORING
            </span>
            <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
              BRANDS
            </span>
            <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
              SINCE
            </span>
            <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
              2020
            </span>
          </h2>
          <HireUsButton bgColor="bg-dark" />
        </div>
      </motion.div>
      {/* END mask */}

      {/* body */}
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="text-20px-capsized md:text-32px-capsized text-grey mb-8 text-center font-stolzl font-normal md:mb-16">
          ZER DESIGN
        </h3>
        <h2 className="mb-16 flex flex-col gap-y-4">
          <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white">
            CRAFTING
          </span>
          <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-purple-light">
            COOL
          </span>
          <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-purple-light">
            BRANDS
          </span>
          <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white">
            SINCE
          </span>
          <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-white">
            2020
          </span>
        </h2>
        <HireUsButton bgColor="bg-purple-dark" />
      </div>
      {/* END body */}
    </section>
  );
};

export default Hero;
