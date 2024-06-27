import React from 'react'
import { FaHtml5,FaCss3,FaBootstrap,FaReact,FaJs,FaPython } from "react-icons/fa";

function Tech() {
  return (
    <>
    <div className='flex justify-center mb-8'>
      <h1 className='text-3xl text-gray-400 text-center font-semibold  ml-8'>Technologies</h1>
      </div>
<div className='text-red-400 ml-12 flex flex-wrap justify-center gap-4 items-center my-32 '>
<div className='border-4 rounded-2xl border-neutral-800 p-4 cursor-pointer opacity-90 hover:shadow-xl hover:shadow-neutral-800 hover:opacity-100'>
<FaHtml5 className='text-4xl text-orange-500 ' />
</div>
<div className='border-4 rounded-2xl border-neutral-800 p-4 cursor-pointer opacity-90 hover:shadow-xl hover:shadow-neutral-800 hover:opacity-100'>
<FaCss3 className='text-4xl text-blue-500 '/></div>
<div className='border-4 rounded-2xl border-neutral-800 p-4 cursor-pointer opacity-90 hover:shadow-xl hover:shadow-neutral-800 hover:opacity-100'>
<FaJs className='text-4xl text-yellow-500 '/></div>
<div className='border-4 rounded-2xl border-neutral-800 p-4 cursor-pointer opacity-90 hover:shadow-xl hover:shadow-neutral-800 hover:opacity-100'>
<FaBootstrap className='text-4xl text-purple-800'/></div>
<div className='border-4 rounded-2xl border-neutral-800 p-4 cursor-pointer opacity-90 hover:shadow-xl hover:shadow-neutral-800 hover:opacity-100'>
<FaReact className='text-4xl text-blue-500'/></div>
<div className='border-4 rounded-2xl border-neutral-800 p-4 cursor-pointer opacity-90 hover:shadow-xl hover:shadow-neutral-800 hover:opacity-100 '>
<FaPython className='text-4xl text-blue-500'/></div>
    </div>
    </>
  )
}

export default Tech
