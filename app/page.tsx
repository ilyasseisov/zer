"use client";

// FC
import { FC } from "react";
// framer motion
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// custom hooks
import useMousePosition from "@/utils/useMousePosition";
import useResourceLoading from "@/utils/useResourceLoading";
// useState
import { useState } from "react";
// useEffect
import { useEffect } from "react";
// useRef
import { useRef } from "react";
// lenis
import Lenis from "@studio-freight/lenis";

// components
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reel from "@/components/Reel";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Help from "@/components/Help";
import Footer from "@/components/Footer";
import ShadeTopBottom from "@/components/misc/ShadeTopBottom";
import SocialIcons from "@/components/SocialIcons";
import HireUsButton from "@/components/ui/HireUsButton";
import Paragraph from "@/components/ui/Paragraph";

//
//
const Home: FC = () => {
  // hooks
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSize0, setIsHoveredSize0] = useState(false);
  const { x, y, scrollY } = useMousePosition();
  const isLoading = useResourceLoading();

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTo = useRef<ReturnType<typeof gsap.quickSetter> | null>(null);
  let lastScrollY = 0;
  let lastTime = performance.now();
  // useGSAP
  useGSAP(
    () => {
      scrollTo.current = gsap.quickSetter(containerRef.current, "y", "px");
    },
    { scope: containerRef },
  );

  const handleScroll = () => {
    const currentTime = performance.now();
    const currentScrollY = window.scrollY;
    const deltaTime = currentTime - lastTime;

    // Estimate future scroll position based on velocity
    const velocity = (currentScrollY - lastScrollY) / deltaTime;
    const predictedScrollY = currentScrollY + velocity * 16; // 16ms ≈ 1 frame

    requestAnimationFrame(() => {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent,
      );

      if (isSafari) {
        // For Safari
        scrollTo.current?.(-currentScrollY);
      } else {
        // For Chrome (and other browsers)
        scrollTo.current?.(-predictedScrollY);
      }
    });

    lastScrollY = currentScrollY;
    lastTime = currentTime;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lenis
  useEffect(() => {
    const lenis = new Lenis({});

    const raf = (time: DOMHighResTimeStamp) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  // local variables
  const size = isHoveredSize0 ? 0 : isHovered ? 600 : 60;
  // return
  return (
    <main className="container w-full max-w-none">
      {/* mask */}
      <motion.div
        className="mask-hero fixed z-[9999] w-full"
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - size / 2}px ${(y ?? 0) - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.6,
          velocity: 4,
        }}
      >
        <div
          ref={containerRef}
          style={{
            // transform: `translateY(-${scrollY ?? 0}px)`,
            willChange: "transform",
          }}
          className="relative"
        >
          {/* hero */}
          <section className="flex h-screen w-full flex-col items-center justify-center bg-purple-light">
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
          </section>
          {/* END hero */}

          {/* reel */}
          <section className="min-h-screen w-full bg-purple-light xl:h-[200vh]"></section>
          {/* END reel */}

          {/* about */}
          <section className="grid h-[600px] grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 sm:h-[720px] md:h-[840px] md:px-0 xl:h-[1200px]">
            <div className="col-span-12 flex w-full flex-col items-start justify-start py-28 md:col-span-10 md:py-32 xl:col-span-8 xl:py-40">
              <div
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
                  ABOUT US
                </h3>
                <Paragraph textDark>
                  We do 2D & 3D graphics because, everyone does it. We build
                  websites like it’s rocket science (but totally isn’t). And
                  pretend to know marketing
                </Paragraph>
              </div>
            </div>
          </section>
          {/* END about */}

          {/* services */}
          <section className="grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center md:px-0">
            <div className="col-span-12 flex w-full flex-col items-start justify-center">
              <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full pl-4 font-stolzl font-normal text-dark md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
                WHAT WE DO
              </h3>
              {/* lines */}
              {Array(5)
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
          {/* END services */}

          {/* experience */}
          <section className="grid h-[600px] grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 sm:h-[720px] md:h-[840px] md:px-0 xl:h-[1200px]">
            <div className="col-span-12 flex w-full flex-col items-start justify-start py-28 md:col-span-10 md:py-32 xl:col-span-8 xl:py-40">
              <div
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
                  EXPERIENCE
                </h3>
                <Paragraph textDark>
                  We Photoshop stock images and Freepik vectors. Build websites
                  with ChatGPT and AI. All our employees graduated from YouTube
                  university
                </Paragraph>
              </div>
            </div>
          </section>
          {/* END experience */}

          {/* clients */}
          <section className="grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center md:px-0">
            <div className="col-span-12 flex w-full flex-col items-start justify-center">
              <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full pl-4 font-stolzl font-normal text-dark md:mb-16 md:pl-[8.333333%] xl:pl-[16.666666%]">
                CLIENTS
              </h3>
              {/* lines */}
              {Array(5)
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
          {/* END clients */}

          {/* testimonials */}
          <section className="grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
            <div className="col-span-12 flex w-full flex-col items-start justify-center text-white md:col-span-10 xl:col-span-8">
              <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
                WHAT THEY SAID
              </h3>
              <div className="slider grid w-full grid-cols-12">
                <div className="reviews col-span-9 flex flex-col items-center gap-y-8">
                  {/* 1 */}
                  <div className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-dark border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40">
                    <Paragraph
                      textDark
                      quoteDark
                      className="mb-10 md:mb-16 xl:mb-24"
                      setIsHovered={setIsHovered}
                    >
                      I am his old friend. He made say nice things about him.
                    </Paragraph>
                    {/* signature */}
                    <div className="mb-1 font-stolzl text-[20px] font-normal text-dark opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                      Alexander Doe
                    </div>
                    <div className="font-stolzl text-[16px] font-normal text-dark opacity-60 md:text-[18px] xl:text-[20px]">
                      CEO - Pixel Design
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-dark border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40">
                    <Paragraph
                      textDark
                      quoteDark
                      className="mb-10 md:mb-16 xl:mb-24"
                      setIsHovered={setIsHovered}
                    >
                      They finally make it work after countless rounds of
                      feedback.
                    </Paragraph>
                    {/* signature */}
                    <div className="mb-1 font-stolzl text-[20px] font-normal text-dark opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                      Alexander Doe
                    </div>
                    <div className="font-stolzl text-[16px] font-normal text-dark opacity-60 md:text-[18px] xl:text-[20px]">
                      CEO - Pixel Design
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="flex h-[600px] flex-col items-start justify-start border-t-1 border-solid border-y-dark border-opacity-25 py-28 sm:h-[720px] md:h-[840px] md:py-32 xl:h-[1200px] xl:py-40">
                    <Paragraph
                      textDark
                      quoteDark
                      className="mb-10 md:mb-16 xl:mb-24"
                      setIsHovered={setIsHovered}
                    >
                      Haha! My six year old sister can do better than this guys.
                    </Paragraph>
                    {/* signature */}
                    <div className="mb-1 font-stolzl text-[20px] font-normal text-dark opacity-80 md:text-[24px] xl:mb-2 xl:text-[28px]">
                      Alexander Doe
                    </div>
                    <div className="font-stolzl text-[16px] font-normal text-dark opacity-60 md:text-[18px] xl:text-[20px]">
                      CEO - Pixel Design
                    </div>
                  </div>
                </div>
                {/* avatars */}
                <div className="col-span-3 h-[100vh]"></div>
              </div>
            </div>
          </section>
          {/* END testimonials */}

          {/* help */}
          <section className="flex h-screen w-full flex-col items-center justify-center bg-purple-light">
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
                IN REALITY
              </h3>
              <h2 className="mb-16 flex flex-col gap-y-4">
                <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
                  WE DO
                </span>
                <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
                  WHATEVER
                </span>
                <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
                  YOU
                </span>
                <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
                  PAY
                </span>
                <span className="text-52px-capsized sm:text-80px-capsized md:text-96px-capsized xl:text-120px-capsized 2xl:text-160px-capsized block text-center font-stolzl font-medium text-dark">
                  FOR
                </span>
              </h2>
              <HireUsButton bgColor="bg-dark" />
            </div>
          </section>
          {/* END help */}

          {/* footer */}
          <section className="mb-[720px] grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:mb-[400px] md:px-0 xl:mb-[480px]">
            <div className="col-span-12 flex w-full flex-col items-start justify-center md:col-span-10 xl:col-span-8">
              <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
                CONNECT
              </h3>
            </div>
          </section>
          {/* END footer */}
        </div>
      </motion.div>
      {/* END mask */}

      {/* body */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/*  */}
      <Header isLoading={isLoading} />
      {/*  */}
      <Hero isLoading={isLoading} />
      <Reel />
      <About />
      <Services setIsHoveredSize0={setIsHoveredSize0} />
      <Experience />
      <Clients setIsHoveredSize0={setIsHoveredSize0} />
      <Testimonials setIsHoveredSize0={setIsHoveredSize0} />
      <Help />
      <Footer setIsHoveredSize0={setIsHoveredSize0} />
      {/*  */}
      <SocialIcons isLoading={isLoading} />
      <ShadeTopBottom />
      {/* END body */}
    </main>
  );
};

export default Home;
