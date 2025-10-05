import React from 'react'

export default function TestimonialCard({
    imgUrl,
    testimonialText,
    userName,
    userRole
}) {
  return (

    <div>
        <div className='flex flex-col items-center-safe gap-2.5 hover:shadow-xl p-5 rounded-2xl transition-all duration-300 ease-in-out' >
            <div>
                <img src={imgUrl} alt="" 
                className="rounded-full w-[80px] h-[80px] object-center object-cover" 
                />
            </div>
           <div className="flex flex-col items-center-safe gap-6">
             <div>
                <p className='h-[120px] overflow-hidden font-Barlow font-semibold text-neutral-600 text-xl text-center line-clamp-4'>
                    {testimonialText}
                </p>
            </div>
            <div className='text-center'>
                <h2 className="font-Fraunces font-bold text-xl leading-[120%]">{userName}</h2>
                <p className="font-Barlow font-medium text-neutral-500">{userRole}</p>
            </div>
           </div>
        </div>
    </div>
  )
}
