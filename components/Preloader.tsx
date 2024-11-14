// fc
import { FC } from "react";
// useState
import { useState } from "react";
// useEffect
import { useEffect } from "react";
// framer
import { motion } from "framer-motion";
// data
const words = [
  "Hello",
  "Привет",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Salam",
];
// animations
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
const Preloader: FC = () => {
  // hooks
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );
  }, [index]);
  // return
  return (
    <>
      <motion.div
        id="preloader"
        className="bg-dark"
        variants={slideUp}
        initial="initial"
        exit="exit"
      >
        <motion.p
          variants={opacity}
          initial="initial"
          animate="enter"
          className="text-40px-capsized md:text-52px-capsized xl:text-64px-capsized font-stolzl text-6xl font-normal text-white"
        >
          {words[index]}
        </motion.p>
      </motion.div>
    </>
  );
};
export default Preloader;
