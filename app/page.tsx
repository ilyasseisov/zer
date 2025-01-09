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
import Paragraph from "@/components/ui/Paragraph";

//// components (mask)
import HeroMask from "@/components/mask/HeroMask";
import ReelMask from "@/components/mask/ReelMask";
import HelpMask from "@/components/mask/HelpMask";
import AboutMask from "@/components/mask/AboutMask";
import ServicesMask from "@/components/mask/ServicesMask";
import ExperienceMask from "@/components/mask/ExperienceMask";
import ClientsMask from "@/components/mask/ClientsMask";
import TestimonialsMask from "@/components/mask/TestimonialsMask";
import FooterMask from "@/components/mask/FooterMask";

//
//
const Home: FC = () => {
  // hooks
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSize0, setIsHoveredSize0] = useState(false);
  const { x, y } = useMousePosition();
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
            willChange: "transform",
          }}
          className="relative"
        >
          <HeroMask isLoading={isLoading} setIsHovered={setIsHovered} />
          <ReelMask />
          <AboutMask setIsHovered={setIsHovered} />
          <ServicesMask />
          <ExperienceMask setIsHovered={setIsHovered} />
          <ClientsMask />
          <TestimonialsMask setIsHovered={setIsHovered} />
          <HelpMask setIsHovered={setIsHovered} />
          <FooterMask />
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
