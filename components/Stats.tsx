"use client";

// fc
import { FC } from "react";

const Stats: FC = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
      <div className="col-span-12 flex w-full flex-col items-start justify-start py-28 text-white md:col-span-10 md:py-32 xl:col-span-8 xl:py-40">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
          PROJECTS WE&apos;VE BUILT
        </h3>
        {/* inner grid */}
        <div className="grid w-full grid-cols-12 gap-x-4 gap-y-8 xl:gap-y-16 2xl:gap-y-24">
          <div className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4">
            <h3 className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8">
              19
            </h3>
            <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl opacity-60">
              BRANDING
            </h4>
          </div>
          <div className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4">
            <h3 className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8">
              27
            </h3>
            <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl opacity-60">
              PACKAGING
            </h4>
          </div>
          <div className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4">
            <h3 className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8">
              40
            </h3>
            <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl opacity-60">
              MOTION DESIGNS
            </h4>
          </div>
          <div className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4">
            <h3 className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8">
              7
            </h3>
            <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl opacity-60">
              WEBSITES
            </h4>
          </div>
          <div className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4">
            <h3 className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8">
              280
            </h3>
            <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl opacity-60">
              SMM
            </h4>
          </div>
          <div className="bg-purple-ligh col-span-12 py-6 text-center md:col-span-6 2xl:col-span-4">
            <h3 className="text-88px-capsized xl:text-120px-capsized mb-6 font-stolzl font-medium xl:mb-8">
              3
            </h3>
            <h4 className="text-24px-capsized xl:text-28px-capsized font-stolzl opacity-60">
              WEB APPS & SAAS
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
