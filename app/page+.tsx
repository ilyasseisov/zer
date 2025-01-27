"use client";

// FC
import { FC } from "react";
import dynamic from "next/dynamic";
//
// import Earth from "@/components/3d/Earth";
//

const Earth = dynamic(() => import("@/components/3d/Earth"), { ssr: false });
const Home: FC = () => {
  return (
    <main className="container h-full w-full max-w-none">
      <h1 className="text-white">Hello</h1>
      <Earth />
    </main>
  );
};

export default Home;
