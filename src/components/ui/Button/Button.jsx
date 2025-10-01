import React from 'react'

export default function Button({text, hoverBg, hoverText, font, fontType, textColor}) {
  return (
   
        <button
        className={`bg-neutral-0 hover:${hoverBg && hoverBg} backdrop-blur-2xl px-5 py-2.5 rounded-full ${font ? font : 'font-Fraunces'} ${fontType ? fontType : 'font-medium'} hover:${hoverText ? hoverText : 'text-neutral-0'} transition-all duration-500 ease-in-out cursor-pointer ${textColor && textColor}`}
        >{text}</button>
   
  )
}
