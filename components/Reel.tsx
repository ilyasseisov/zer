"use client";

// fc
import { FC, CSSProperties } from "react";
// useRef
import { useRef } from "react";
// next video
import BackgroundVideo from "next-video/background-video";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// videos
// import zerReel3 from "https://res.cloudinary.com/dvrzwkm1e/video/upload/v1737020873/ad26b43a65edefaed89656130397fc08d91214d0.bin_qtxclj.mp4";
import zerReelLocal from "@/videos/zerReel.mp4";
// images
import images from "../public/img";
// register plugin
gsap.registerPlugin(ScrollTrigger);
const Reel: FC = () => {
  // hooks
  // useRef
  const containerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  // // useGSAP
  useGSAP(
    () => {
      //
      const mm = gsap.matchMedia();
      //
      mm.add("(min-width: 1280px)", () => {
        const tl = gsap.timeline().to(boxRef.current, { scale: 2 });
        //
        ScrollTrigger.create({
          trigger: containerRef.current,
          animation: tl,
          // markers: true,
          // when the TOP of the trigger hits the TOP of the viewport
          start: "top top",
          // when the BOTTOM of the trigger hits the TOP of the viewport
          end: "bottom top",
          scrub: 1,
          pin: true,
        });
      });
      //

      //
    },
    { scope: containerRef },
  );
  // //
  // return
  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center justify-center overflow-hidden bg-dark"
    >
      <div
        ref={boxRef}
        className="h-full w-full xl:aspect-video xl:h-min xl:w-[40%]"
      >
        <BackgroundVideo
          src={zerReelLocal}
          // src={zerReel3}
          style={
            {
              aspectRatio: "auto",
              width: "100%",
              height: "100%",
            } as CSSProperties
          }
          disableTracking
          poster={images.videoPoster}
          blurDataURL={images.videoPoster.src}
        />
      </div>
    </section>
  );
};

export default Reel;
