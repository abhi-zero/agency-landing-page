import React from "react";

export default function CustomAnchorLink({ text, bgColor }) {
  console.log(bgColor);

  return (
    <div>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          "--after-bg":`var(--${bgColor})` ,
          "--hover-color" : `var(--${bgColor})` 
        }}
        className={`relative inline-block after:content-[""] after:block after:h-1  after:bg-[var(--after-bg)]  after:absolute after:bottom-1 after:left-0 after:w-full font-Fraunces font-bold text-xl z-50 after:z-[-1] after:rounded-full hover:after:w-0 after:transition-all after:duration-300 after:ease-in-out  hover:text-[var(--hover-color)]
         `}
      >
        {text}
      </a>
    </div>
  );
}
