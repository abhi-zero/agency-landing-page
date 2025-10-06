import React from 'react'
import getColor from '../../../utitly/colors/index'
export default function AnchorLinkAsButton({
    textColor,
    text,
    bg,
    link
}) {
    const color = getColor(textColor)
    const bgColor = getColor(bg)
    console.log(color, bgColor);
    
  return (
    <a href={link}
    style={{
        '--bg-color' : `var(--${bgColor})`,
        '--text-color' : `var(--${color})`
    }}
    className='px-5 py-2.5 border-[var(--text-color)] border-2 rounded-full font-Barlow font-semibold text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300 ease-in-out' >
        {text}
    </a>
  )
}
