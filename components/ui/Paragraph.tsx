// fc
import { FC } from "react";
// useRef
import { useRef } from "react";
// framer motion
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
// types
type ParagraphProps = {
  children: string;
  highlightWords?: number[];
};

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: number[];
  isHighlighted: boolean;
};

const Paragraph: FC<ParagraphProps> = ({ children, highlightWords = [] }) => {
  // hooks
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.4"],
  });
  // local vars
  const words = children.split(" ");
  // return
  return (
    //
    <>
      <p
        ref={container}
        className="text-36px-capsized md:text-64px-capsized xl:text-96px-capsized flex flex-wrap text-left font-stolzl font-medium text-white"
      >
        {words.map((word, i) => {
          // local variables
          const start = i / words.length;
          const end = start + 1 / words.length;
          // Check if the current word index is in the highlightWords array
          const isHighlighted = highlightWords.includes(i);
          // return
          return (
            <Word
              isHighlighted={isHighlighted}
              progress={scrollYProgress}
              range={[start, end]}
              key={i}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
};

const Word: FC<WordProps> = ({ children, progress, range, isHighlighted }) => {
  // hooks
  const opacity = useTransform(progress, range, [0, 1]);
  // return
  return (
    <>
      <span
        className={`relative mr-[12px] md:mr-[22px] xl:mr-[28px] ${isHighlighted ? "text-purple-light" : ""}`}
      >
        <span className="absolute opacity-20">{children}</span>
        <motion.span style={{ opacity: opacity }}>{children}</motion.span>
      </span>
    </>
  );
};

export default Paragraph;
