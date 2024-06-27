import React from 'react'

function Education() {
  return (
    <>
    <div className='my-16 '>
      <h1 className='text-3xl text-gray-400 text-center font-semibold relative right-28'>Education</h1>
    </div>
    <div className=' text-gray-400 pb-28 flex gap-9 relative left-20  w-[80%] border-b border-neutral-700'>
        <div className='w-[30%]'>
            <p className='ml-10 text-gray-600'>2020 - 2023</p>
        </div>
        <div className='w-[50%]'>
        <h2 className='font-bold text-gray-100'>Bachelor's Degree in Computer Science - Web and Mobile Application Development</h2>
        <p>Relevant Coursework: Advanced Web Development, User Interface Design, Mobile Application Development
        Skills Developed: Problem-solving, Analytical Thinking, Communication</p>
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

export default Education
