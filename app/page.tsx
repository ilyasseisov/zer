"use client";

// FC
import { FC } from "react";
// framer motion
import { motion } from "framer-motion";
// custom hook
import useMousePosition from "@/utils/useMousePosition";
// useState
import { useState } from "react";
// components
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
import SocialIcons from "@/components/ui/SocialIcons";
import HireUsButton from "@/components/ui/HireUsButton";
import Paragraph from "@/components/ui/Paragraph";
//
//
import HoverElement from "@/components/ui/HoverElement";
//
const Home: FC = () => {
  // hooks
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSize0, setIsHoveredSize0] = useState(false);
  const { x, y, scrollY } = useMousePosition();
  // local variables
  const size = isHoveredSize0 ? 0 : isHovered ? 600 : 60;
  // return
  return (
    <main className="container w-full max-w-none">
      {/* mask */}
      <motion.div
        className="mask-hero absolute z-[9999] w-full"
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - size / 2}px ${(y ?? 0) + (scrollY ?? 0) - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.6,
          velocity: 4,
        }}
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
        <section className="h-screen w-full bg-purple-light"></section>
        {/* END reel */}

        {/* about */}
        <section className="grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
          <div className="col-span-12 flex w-full flex-col items-start justify-center md:col-span-10 xl:col-span-8">
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
              <p className="word-wrap text-36px-capsized md:text-64px-capsized xl:text-96px-capsized relative flex flex-wrap hyphens-auto text-left font-stolzl font-medium text-dark">
                We do 2D & 3D graphics because, everyone does it. We build
                websites like it’s rocket science (but totally isn’t). And
                pretend to know marketing
              </p>
            </div>
          </div>
        </section>
        {/* END about */}

        {/* services */}
        <section className="min-h-screen"></section>
        {/* END services */}

        {/* experience */}
        <section className="grid min-h-screen grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:px-0">
          <div className="col-span-12 flex w-full flex-col items-start justify-center md:col-span-10 xl:col-span-8">
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
              <p className="word-wrap text-36px-capsized md:text-64px-capsized xl:text-96px-capsized relative flex flex-wrap hyphens-auto text-left font-stolzl font-medium text-dark">
                We Photoshop stock images and Freepik vectors. Build websites
                with ChatGPT. All our employees graduated from YouTube
                university
              </p>
            </div>
          </div>
        </section>
        {/* END experience */}

        {/* clients */}
        <section className="min-h-screen"></section>
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
                <div className="flex h-[600px] flex-col items-start justify-center border-t-1 border-solid border-y-dark border-opacity-25 md:h-[900px] xl:h-[100vh]">
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
                <div className="flex h-[600px] flex-col items-start justify-center border-t-1 border-solid border-y-dark border-opacity-25 md:h-[900px] xl:h-[100vh]">
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
                <div className="flex h-[600px] flex-col items-start justify-center border-t-1 border-solid border-y-dark border-opacity-25 md:h-[900px] xl:h-[100vh]">
                  <Paragraph
                    textDark
                    quoteDark
                    className="mb-10 md:mb-16 xl:mb-24"
                    setIsHovered={setIsHovered}
                  >
                    I waited three months my photos to be cropped.
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
        <section className="mb-16 grid grid-cols-[repeat(auto-fit,_8.333333%)] justify-center px-4 md:mb-24 md:px-0 xl:mb-32">
          <div className="col-span-12 flex w-full flex-col items-start justify-center md:col-span-10 xl:col-span-8">
            <h3 className="text-20px-capsized md:text-32px-capsized mb-8 w-full font-stolzl font-normal text-dark md:mb-16">
              CONNECT
            </h3>
          </div>
        </section>
        {/* END footer */}
      </motion.div>
      {/* END mask */}

      {/* body */}
      {/* <Header /> */}
      <Hero />
      <Reel />
      <About />
      <Services setIsHoveredSize0={setIsHoveredSize0} />
      <Experience />
      <Clients setIsHoveredSize0={setIsHoveredSize0} />
      <Testimonials setIsHoveredSize0={setIsHoveredSize0} />
      <Help />
      <Footer setIsHoveredSize0={setIsHoveredSize0} />
      {/* <SocialIcons /> */}
      {/* END body */}
    </main>
  );
};

export default Home;
