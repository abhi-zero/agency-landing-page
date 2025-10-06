import React from "react";
import AnchorLinkAsButton from "../../ui/AnchorLinkAsButton/AnchorLinkAsButton";

export default function ProjectCard({
  mobileImage,
  desktopImage,
  linkTextColor,
  linkBgColor,
  link
}) {
  return (
    <div>
      <div className="lg:hidden block">
        <a href={link}>
          <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <img
            src={desktopImage}
            className="w-full h-full object-center object-cover"
          />
        </picture>
        </a>
      </div>
      <div className="group hidden lg:block relative overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <img
            src={desktopImage}
            className="w-full h-full object-center object-cover"
          />
        </picture>
        <div className="top-[100%] group-hover:top-[0%] absolute flex justify-center items-center-safe bg-neutral-0/9 backdrop-blur-sm w-full h-full transition-all duration-300 ease-in-out">
          <AnchorLinkAsButton
            text={"Learn more"}
            link={link}
            textColor={linkTextColor}
            bg={linkBgColor}
          />
        </div>
      </div>
    </div>
  );
}
