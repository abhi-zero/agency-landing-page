import React from "react";
import getColor from "../../../utitly/colors";
import { motion } from "motion/react";

export default function ServiceCard({
  mobileImage,
  desktopImage,
  varient,
  alt,
  heading,
  description,
  bg,
  text,
}) {
  const color = getColor(bg);
  const textColor = getColor(text);

  return (
    <a href="#" className="group">
      <div
        style={{
          "--bg-img-color": `var(--${color})`,
        }}
        className={`relative bg-[var(--bg-img-color)] w-full overflow-hidden`}
      >
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <motion.img
            // initial={
            //   varient === 1
            //     ? {
            //         x: "-60%",
            //         opacity: 0,
            //       }
            //     : {
            //         x: "60%",
            //         opacity: 0,
            //       }
            // }
            // whileInView={{
            //   x: 0,
            //   opacity: 1,
            //   rotateZ: 0,
            // }}
            // transition={{
            //   duration: 1,
            //   ease: "linear",
            // }}
            // viewport={{
            //   once: true,
            //   amount: 0,
            // }}
            src={desktopImage}
            alt={alt}
            className="w-full h-full object-center object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </picture>
        <div
          style={{
            "--text-color": `var(--${textColor})`,
          }}
          className="top-[70%] md:top-[60%] md:left-0 absolute px-5 lg:px-8 xl:px-[100px] w-full text-[var(--text-color)] text-center group-hover:underline"
        >
          <h2 className="text-shadow-2xs font-Fraunces font-bold text-2xl lg:text-3xl xl:text-5xl leading-[120%]">
            {heading}
          </h2>
          <p className="lg:text-xl">{description}</p>
        </div>
      </div>
    </a>
  );
}
