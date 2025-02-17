import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  }
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3
    }
  }
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className=" w-full flex items-center justify-center mx-auto py-2 overflow-hidden text-center">
      <motion.h1
        className={` inline-block w-full text-black font-bold text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
