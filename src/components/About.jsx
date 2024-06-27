import React from 'react'
import { ABOUT_TEXT } from '../constants'
import img from '../assets/about.jpg'
function About() {
  return (
    <>
    <div>
    <h1 className='text-gray-400 mt-8 border-spacing-1 text-3xl font-semibold text-center mb-8 '>About <span className='text-gray-600'>Me</span> </h1>
</div>
    <div className='text-gray-400 flex justify-between relative left-16 flex-col gap-2 w-[80%] mt-28 mb-12 pb-24 md:flex-row '>
      <div className='w-[60%] relative left-8 flex-wrap md:w-[40%]'>
      <img src={img} className='object-cover rounded-lg relative left-28 w-[300px]  md:relative md:left-28 '/>
      </div>
      <div className='w-[60%]  relative left-8 md:w-[40%] '>
       <p className='relative left-28 md:left-0 '>{ABOUT_TEXT}</p>
      </div>
    </div>
    </>
  )
}

export default About
