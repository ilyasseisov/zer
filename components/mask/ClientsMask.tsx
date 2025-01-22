"use client";
// fc
import { FC } from "react";

const ClientsMask: FC = () => {
  // hooks
  // local variables
  // functions
  // return
  return (
    <>
      <section className="grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center md:px-0">
        <div className="col-span-12 flex w-full flex-col items-start justify-center">
          <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full pl-4 font-stolzl font-normal text-dark md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
            CLIENTS
          </h3>
          {/* lines */}
          {Array(6)
            .fill("")
            .map((line, index) => (
              <div
                data-text
                key={index}
                className="text-48px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized font-stolzl font-bold"
              >
                <p>&nbsp;</p>
                <span></span>
                <div className="!bg-dark underline"></div>
                <div className="upperline !bg-dark"></div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default ClientsMask;
