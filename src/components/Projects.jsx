import React from 'react'
import {PROJECTS} from '../constants/index'
function Projects() {
  return (
    <>
    <div className='my-24 border-t border-neutral-700 pt-20'>
      <h1 className='text-3xl text-gray-400 text-center font-semibold relative right-28'>Projects</h1>
    </div>
    <div className=' text-gray-400 flex gap-12 relative left-20 md:left-28 w-[80%] mb-24'>
        <div className='w-[30%]'>
<img src={PROJECTS[0].image} className='h-[200px] w-[300px] object-cover'/>
        </div>
        <div className='w-[50%]'>
        <h2 className='font-bold text-gray-100'>{PROJECTS[0].title}</h2>
        <p>{PROJECTS[0].description}</p>
        <div className='my-6 flex gap-5'>
        <a className=' text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 ' >Html</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Css</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>JavaScript</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Bootstrap</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>React.js</a>
        </div>
        </div>
    </div>

    <div className='mb-24 text-gray-400 flex gap-12 relative left-20 md:left-28 w-[80%]'>
        <div className='w-[30%]'>
<img src={PROJECTS[1].image} className='h-[200px] w-[300px] object-cover'/>
        </div>
        <div className='w-[50%]'>
        <h2 className='font-bold text-gray-100'>{PROJECTS[1].title}</h2>
        <p>{PROJECTS[1].description}</p>
        <div className='my-6 flex gap-5'>
        <a className=' text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 ' >Html</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Css</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>JavaScript</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Bootstrap</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>React.js</a>
        </div>
        </div>
    </div>



    <div className=' text-gray-400 flex gap-12 relative left-20 md:left-28 w-[80%]'>
        <div className='w-[30%]'>
<img src={PROJECTS[2].image} className='h-[200px] w-[300px] object-cover'/>
        </div>
        <div className='w-[50%]'>
        <h2 className='font-bold text-gray-100'>{PROJECTS[2].title}</h2>
        <p>{PROJECTS[2].description}</p>
        <div className='my-6 flex gap-5'>
        <a className=' text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 ' >Html</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Css</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>JavaScript</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Tailwind</a>
        <a className='text-purple-600 bg-neutral-900 px-4 rounded-sm cursor-pointer hover:shadow-xl hover:shadow-neutral-800 '>Reactjs</a>
        </div>
        </div>
    </div>


    </>
  )
}

export default Projects
