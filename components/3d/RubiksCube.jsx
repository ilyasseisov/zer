"use client";
// drei
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
// fiber
import { Canvas } from "@react-three/fiber";
// framer-motion
import { useScroll } from "framer-motion";
// framer-motion-3d
import { motion } from "framer-motion-3d";
// useRef
import { useRef } from "react";
export default function RubiksCube(props) {
  // hooks
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  // local variables
  const { nodes, materials } = useGLTF("/models/RubiksCube.glb");
  // return
  return (
    <Canvas ref={scene}>
      <PerspectiveCamera makeDefault position={[10, 20, 20]} />
      <OrbitControls enabled={false} />
      <ambientLight intensity={0.5} />
      {/* cube */}
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <motion.mesh
            rotation-y={scrollYProgress}
            castShadow
            receiveShadow
            geometry={nodes.Baked_baked_0.geometry}
            material={materials.baked}
            rotation={[-Math.PI / 3, 0, 1]}
            scale={160}
            position={[0, -140, 0]}
          />
        </group>
      </group>
      {/* END cube */}
    </Canvas>
  );
}

useGLTF.preload("/models/RubiksCube.glb");
