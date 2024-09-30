// FC
import { FC } from "react";
// components
import Hero from "@/components/Hero";
import Reel from "@/components/Reel";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";

const Home: FC = () => {
  return (
    <main className="container w-full max-w-none">
      <Hero />
      <Reel />
      <About />
      <Services />
      <Experience />
    </main>
  );
};

export default Home;
