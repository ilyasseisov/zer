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
export default function Baseball(props) {
  // hooks
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  // local variables
  const { nodes, materials } = useGLTF("/models/Baseball.glb");
  // return
  return (
    <Canvas ref={scene}>
      <PerspectiveCamera makeDefault position={[4, 4, 4]} />
      <OrbitControls enabled={false} />
      <ambientLight intensity={1} />
      {/* baseball */}
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 1.5, 0, 0]}
            rotation-z={scrollYProgress}
            scale={240}
          />
        </group>
      </group>
      {/* END baseball */}
    </Canvas>
  );
}

useGLTF.preload("/models/Baseball.glb");
