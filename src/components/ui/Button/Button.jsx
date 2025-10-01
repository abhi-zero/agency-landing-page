import React from 'react'

export default function Button({text,bg, hoverBg, hoverText, font, fontType, textColor, onClick}) {
  return (
   
        <button
        onClick={onClick && onClick}
        className={`${bg ? bg: 'bg-neutral-0'}  ${hoverBg ? hoverBg : 'hover:bg-neutral-0/30'} backdrop-blur-2xl px-5 py-2.5 rounded-full ${font ? font : 'font-Fraunces'} ${fontType ? fontType : 'font-medium'} ${hoverText ? hoverText : 'hover:text-neutral-0'} transition-all duration-500 ease-in-out cursor-pointer ${textColor ? textColor : 'text-black'}`}
        >{text}</button>
   
  )
}
