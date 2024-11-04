"use client";

// fc
import { FC } from "react";
// components
import HireUsButton from "./ui/HireUsButton";

const Hero: FC = () => {
  // hooks
  // local variables
  // return
  return (
    <section className="h-screen bg-dark">
      {/* body */}
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 text-center font-stolzl font-normal text-grey md:mb-16">
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
