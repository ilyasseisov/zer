// FC
import { FC } from "react";
// components
import Hero from "@/components/Hero";
import Reel from "@/components/Reel";
import About from "@/components/About";
const Home: FC = () => {
  return (
    <main className="container w-full max-w-none">
      <Hero />
      <Reel />
      <About />
    </main>
  );
};

export default Home;
