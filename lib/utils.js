// gsap
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// register plugin
gsap.registerPlugin(ScrollToPlugin);
export const handleScrollToFooter = () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: "#footer",
    ease: "circ.out",
  });
};
