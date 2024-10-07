// FC
import { FC } from "react";
// components
import Hero from "@/components/Hero";
import Reel from "@/components/Reel";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";
import Help from "@/components/Help";

const Home: FC = () => {
  return (
    <main className="container w-full max-w-none">
      <Hero />
      <Reel />
      <About />
      <Services />
      <Experience />
      <Clients />
      {/* <Testimonials /> */}
      {/* <Testimonials2 /> */}
      <Help />
    </main>
  );
};

export default Home;
