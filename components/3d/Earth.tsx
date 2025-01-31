"use client";
// fiber
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// framer-motion
import { useScroll } from "framer-motion";
// framer-motion-3d
import { motion } from "framer-motion-3d";
// useRef
import { useRef } from "react";
// react-responsive
import { useMediaQuery } from "react-responsive";

export default function Earth() {
  // hooks
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  // Media queries for responsiveness
  const isXL = useMediaQuery({ minWidth: 1280 });

  // local variables
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);
  // functions
  // return
  return (
    <>
      <Canvas ref={scene}>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <motion.mesh scale={isXL ? 2.5 : 2} rotation-y={scrollYProgress}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
      </Canvas>
    </>
  );
}
