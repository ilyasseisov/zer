// gsap
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// register plugin
gsap.registerPlugin(ScrollToPlugin);

// scroll to footer
export const handleScrollToFooter = () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: "#footer",
    ease: "circ.out",
  });
};

// copy to clipboard
export const CopyToClipboard = () => {
  console.log("hi");

  navigator.clipboard
    .writeText("hello")
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
};
