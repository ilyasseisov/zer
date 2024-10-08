// fc
import { FC } from "react";
// components
import HoverElement from "./ui/HoverElement";
const Footer: FC = () => {
  return (
    <section className="mb-16 grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:mb-24 md:px-0 xl:mb-32">
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white md:col-span-10 xl:col-span-8">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
          CONNECT
        </h3>
        {/* grid */}
        <div className="grid w-full grid-cols-12 gap-x-6">
          <div className="col-span-12 mb-4 space-y-4 overflow-hidden md:col-span-6 2xl:col-span-4">
            <HoverElement
              starMarker
              content={{ text: "Instagram", hover: "Not TikTok" }}
            />
            <HoverElement
              starMarker
              content={{ text: "LinkedIn", hover: "Serious Us" }}
            />
            <HoverElement
              starMarker
              content={{ text: "Youtube", hover: "Some videos" }}
            />
          </div>
          <div className="col-span-12 mb-4 space-y-4 overflow-hidden md:col-span-6 2xl:col-span-4">
            <HoverElement
              starMarker
              content={{ text: "Dribbble", hover: "We don't have it" }}
            />
            <HoverElement
              starMarker
              content={{ text: "Behance", hover: "Case studies" }}
            />
            <HoverElement
              starMarker
              content={{ text: "Facebook", hover: "Fun memes" }}
            />
          </div>
          <div className="col-span-12 overflow-hidden 2xl:col-span-4">
            <div className="grid w-full grid-cols-12 gap-x-6">
              <div className="col-span-12 mb-4 text-white md:col-span-6 2xl:col-span-12">
                <HoverElement
                  content={{ text: "hi@zer.design", hover: "Email" }}
                />
              </div>
              <div className="col-span-12 text-white md:col-span-6 2xl:col-span-12">
                <HoverElement
                  content={{ text: "+993 65 805 324", hover: "Call us" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
