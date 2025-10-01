import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo.svg";
import Button from "../ui/Button/Button";
import { HiMenu } from "react-icons/hi";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200 } },
  };
  return (
    <div className="z-999 fixed md:px-10 w-screen">
      <nav className="z-999 relative flex justify-between items-center-safe bg-neutral-0/5 backdrop-blur-2xl mx-auto md:my-5 px-8 md:px-5 py-8 md:py-5 md:pl-8 md:rounded-full w-full max-w-[1340px]">
        <motion.div 
        initial={{y : -20, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        >
          <img src={logo} alt="logo" />
        </motion.div>
        <div className="hidden md:block">
          <motion.ul
            className="flex items-center-safe gap-10"
            variants={navVariant}
            initial="hidden"
            animate="show"
          >
            {["About", "Service", "Project"].map((text) => (
              <motion.li key={text} variants={itemVariant}>
                <a
                  href=""
                  className="font-Barlow font-bold text-[18px] text-neutral-0 hover:text-yellow-500 transition-all duration-500 ease-in-out"
                >
                  {text}
                </a>
              </motion.li>
            ))}

            <motion.li variants={itemVariant}>
              <Button text="CONTACT" />
            </motion.li>
          </motion.ul>
        </div>
        <div className="md:hidden block">
          <Button onClick={() => setIsOpen(!isOpen)} text={<HiMenu />} />
        </div>
      </nav>
      <motion.div
        className="top-2/2 z-995 absolute w-full overflow-hidden"
        initial={{ opacity: 0, y: -300 }}
        animate={isOpen ? { y: 0, opacity: "100%" } : { y: -300, opacity: 0 }}
        style={{ originX: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="md:hidden block relative px-11 py-9 w-full h-full nav-links">
          <div className="top-0 right-11 absolute triangle"></div>
          <div className="bg-neutral-0 p-10">
            <ul className="flex flex-col items-center-safe gap-5">
              <li>
                <a
                  href=""
                  className="font-Barlow font-bold text-[18px] text-neutral-500 hover:text-yellow-500 transition-all duration-500 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-Barlow font-bold text-[18px] text-neutral-500 hover:text-yellow-500 transition-all duration-500 ease-in-out"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-Barlow font-bold text-[18px] text-neutral-500 hover:text-yellow-500 transition-all duration-500 ease-in-out"
                >
                  Projects
                </a>
              </li>
              <li>
                <Button
                  text="CONTACT"
                  bg={"bg-yellow-500"}
                  hoverBg={"hover:bg-neutral-500"}
                />
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
