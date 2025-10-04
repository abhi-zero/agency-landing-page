import React from "react";
import { motion } from "motion/react";
import CustomAnchorLink from "../../ui/CustomAnchorLink/CustomAnchorLink";
export default function AboutCard({
  mobileImage,
  desktopImage,
  alt,
  heading,
  description,
  varient = 1,
  bg,
  linkText,
}) {
  const colors = {
    yellow: "cm-yellow-500",
    redMedium: "cm-red-400",
    redLight: "cm-red-200",
    greenDark: "cm-green-800",
    greenLight: "cm-green-500",
    blue: "cm-blue-800",
  };

  return (
    <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 bg-neutral-0 w-screen">
      <div
        className={`${
          varient === 1
            ? "md:col-start-1 md:col-end-2 "
            : "md:col-start-2 md:col-end-3"
        } row-start-2 row-end-3 md:row-start-1 md:row-end-1 p-8 md:p-[80px] lg:p-[100px]  lg:max-w-[700px] self-center w-full m-auto`}
      >
        <div className="flex flex-col gap-2.5 md:text-left text-center">
          <motion.h2
            initial={{
              y: "100%",
              opacity: 0.3,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="font-Fraunces font-bold text-2xl md:text-3xl lg:text-5xl leading-[100%]"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0.3,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="font-Barlow font-medium text-neutral-500 md:text-xl"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{
              y: "-100%",
              opacity: 0.3,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <CustomAnchorLink text={linkText} bgColor={colors[bg]} />
          </motion.div>
        </div>
      </div>
      <div className={`overflow-hidden ${bg && `bg-${colors[bg]}`}`}>
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <motion.img
            initial={
              varient === 1
                ? {
                    x: "100%",
                    y: "100%",
                    opacity: 0,
                    rotateZ: 45,
                  }
                : { x: "-100%", y: "100%", opacity: 0, rotateZ: -45 }
            }
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              rotateZ: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
              amount: 0,
            }}
            src={desktopImage}
            alt={alt}
            className="w-full h-full object-center"
          />
        </picture>
      </div>
    </div>
  );
}
