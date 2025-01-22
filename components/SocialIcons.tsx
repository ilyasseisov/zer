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
import MagneticWrapper from "./misc/MagneticWrapper";
// images
import images from "@/public/img";
// types
type LoadingProps = {
  isLoading?: boolean;
};

const SocialIcons: FC<LoadingProps> = ({ isLoading }) => {
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
        ref={containerRef}
        className="fixed bottom-12 left-8 z-[10001] hidden flex-col gap-y-4 xl:bottom-16 xl:left-16 xl:flex"
      >
        <MagneticWrapper>
          <a
            href="https://www.instagram.com/zer_design_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer pb-4 pr-4 pt-4"
          >
            <Image src={images.insta} alt="insta" width={40} height={40} />
          </a>
        </MagneticWrapper>
        <MagneticWrapper>
          <a
            href="https://tm.linkedin.com/company/zer-design"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer pb-4 pr-4 pt-4"
          >
            <Image
              src={images.linkedin}
              alt="linkedin"
              width={40}
              height={40}
            />
          </a>
        </MagneticWrapper>
        <MagneticWrapper>
          <a
            href="https://www.behance.net/hizerdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer pb-4 pr-4 pt-4"
          >
            <Image src={images.behance} alt="behance" width={40} height={40} />
          </a>
        </MagneticWrapper>

        <MagneticWrapper>
          <a
            href="https://zer.design/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer pb-4 pr-4 pt-4"
          >
            <Image src={images.blog} alt="blog" width={40} height={40} />
          </a>
        </MagneticWrapper>
      </aside>
    </>
  );
};
export default SocialIcons;
