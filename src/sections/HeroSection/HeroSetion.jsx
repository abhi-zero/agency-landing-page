import React from "react";
import { motion } from "motion/react";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
export default function HeroSetion() {
  return (
    <div className="bg-[image:var(--hero-mobile)] md:bg-[image:var(--hero-desktop)] bg-center pt-[124px] w-[100vw] h-[100vh] max-width">
      <div className="perspective-normal">
        <motion.h1
          className="mt-[130px] font-Fraunces font-extrabold text-neutral-0 text-7xl text-center"
          initial={{
            rotateX: 90,
            scale: 0.7,
          }}
          animate={{
            rotateX: 0,
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          We are creatives
        </motion.h1>
      </div>
      <motion.div
        className="flex justify-center mt-[130px] md:h-[150px]"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <motion.img
          src={arrowDown}
          alt=""
          className="object-center"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease:"easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>
    </div>
  );
}
