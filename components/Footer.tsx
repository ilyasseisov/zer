// fc
import { FC } from "react";
// useState
import { useState } from "react";
// components
import HoverElement from "./ui/HoverElement";
// types
type HoverProps = {
  setIsHoveredSize0: (value: boolean) => void;
};
const Footer: FC<HoverProps> = ({ setIsHoveredSize0 }) => {
  // hooks
  const [emailText, setEmailText] = useState<string>("Click to copy");
  // functions
  const CopyToClipboard = () => {
    navigator.clipboard
      .writeText("hi@zer.design")
      .then(() => {
        setEmailText("Copied");
        // Reset the text after 5 seconds
        setTimeout(() => {
          setEmailText("Click to copy");
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        setEmailText("Type manually");
        // Reset the text after 5 seconds
        setTimeout(() => {
          setEmailText("Click to copy");
        }, 2000);
      });
  };
  // return
  return (
    <section
      id="footer"
      className="z-[10009] mb-40 grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:mb-48 md:px-0 xl:mb-32"
    >
      <div className="col-span-12 flex w-full flex-col items-start justify-center text-white md:col-span-10 xl:col-span-8">
        <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-grey md:mb-16">
          CONNECT
        </h3>
        {/* grid */}
        <div className="relative z-[10001] grid w-full grid-cols-12 gap-x-6">
          <div className="col-span-12 mb-4 space-y-4 overflow-hidden md:col-span-6 2xl:col-span-4">
            <HoverElement
              setIsHoveredSize0={setIsHoveredSize0}
              starMarker
              content={{
                text: "Instagram",
                hover: "Not TikTok",
                url: "https://www.instagram.com/zer_design_official/",
              }}
            />
            <HoverElement
              setIsHoveredSize0={setIsHoveredSize0}
              starMarker
              content={{
                text: "LinkedIn",
                hover: "Serious Us",
                url: "https://tm.linkedin.com/company/zer-design",
              }}
            />
            <HoverElement
              setIsHoveredSize0={setIsHoveredSize0}
              starMarker
              content={{
                text: "Youtube",
                hover: "Some videos",
                url: "https://www.youtube.com/@ZerDesignYouTube",
              }}
            />
          </div>
          <div className="col-span-12 mb-4 space-y-4 overflow-hidden md:col-span-6 2xl:col-span-4">
            <HoverElement
              setIsHoveredSize0={setIsHoveredSize0}
              starMarker
              content={{ text: "Dribbble", hover: "We don't have it" }}
            />
            <HoverElement
              setIsHoveredSize0={setIsHoveredSize0}
              starMarker
              content={{
                text: "Behance",
                hover: "Case studies",
                url: "https://www.behance.net/hizerdesign",
              }}
            />
            <HoverElement
              setIsHoveredSize0={setIsHoveredSize0}
              starMarker
              content={{
                text: "Blog",
                hover: "Just read it",
                url: "https://zer.design/blog",
              }}
            />
          </div>
          <div className="col-span-12 overflow-hidden 2xl:col-span-4">
            <div className="grid w-full grid-cols-12 gap-x-6">
              <div
                onClick={CopyToClipboard}
                className="col-span-12 mb-4 text-white md:col-span-6 2xl:col-span-12"
              >
                <HoverElement
                  setIsHoveredSize0={setIsHoveredSize0}
                  content={{ text: "hi@zer.design", hover: emailText }}
                />
              </div>
              <div className="col-span-12 text-white md:col-span-6 2xl:col-span-12">
                <HoverElement
                  setIsHoveredSize0={setIsHoveredSize0}
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
