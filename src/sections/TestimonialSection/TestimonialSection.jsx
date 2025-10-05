import React from 'react'
import testimonials from '../../utitly/user'
import { TestimonialCard } from '../../components'

export default function TestimonialSection() {
  return (
    <div className='lg:px-[100px] py-[50px] md:py-[100px]'>
        <h2 className='mb-[50px] font-Fraunces font-bold text-neutral-500 text-3xl text-center tracking-wider'>Client testimonials</h2>
        <div className=''>
            <ul className='gap-2.5 lg:gap-10 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] p-5'>
                {testimonials.map((testimonial) => (
                   <li key={`${testimonial.userName}-${testimonial.userRole}`}
                   className=''
                   >
                     <TestimonialCard 
                    testimonialText={testimonial.message}
                    userName={testimonial.user}
                    userRole={testimonial.userRole}
                    imgUrl={testimonial.image}
                    />
                   </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
