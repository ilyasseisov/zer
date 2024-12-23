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
export default function Donut(props) {
  // hooks
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  // local variables
  const { nodes, materials } = useGLTF("/models/Donut.glb");
  // return
  return (
    <Canvas ref={scene}>
      <PerspectiveCamera makeDefault position={[4, 4, 4]} />
      <OrbitControls enabled={false} />
      <ambientLight intensity={1} />
      {/* donut */}
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <motion.mesh scale={2} rotation-x={scrollYProgress}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.material_0}
            />
          </motion.mesh>
        </group>
      </group>
      {/* END donut */}
    </Canvas>
  );
}

useGLTF.preload("/models/Donut.glb");
