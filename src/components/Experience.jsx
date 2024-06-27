import React from 'react'

function Experience() {
  return (
    <>
    <div className='my-16'>
      <h1 className='text-3xl text-gray-400 text-center font-semibold relative right-28'>Experience</h1>
    </div>
    <div className=' text-gray-400  flex gap-9 relative left-20 md:left-28 w-[80%] borde-b border-neutral-700'>
        <div className='w-[30%]'>
            <p className='ml-10 text-gray-600'>February,2023 - May,2023</p>
        </div>
        <div className='w-[50%]'>
        <h2 className='font-bold text-gray-100'>Internship - Front-End Developer - Algérie Telecom (2023)</h2>
        <p>
Created user interfaces for an internal web application
Integrated graphic designs and implemented interactive features
Optimized performance and conducted cross-browser compatibility testing</p>
        <div className='my-6 flex gap-5'>
        <a className=' text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 ' >Html</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Css</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>JavaScript</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Bootstrap</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>React.js</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default Experience
