import React from 'react'
import Img from '../assets/kevinRushProfile.png'
import {HERO_CONTENT} from '../constants'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
    <div className='flex justify-center mt-10 gap-4 items-center w-full  flex-wrap border-b border-neutral-800 pb-24 lg:flex lg:justify-between ml-6 ' >
    <div className='text-gray-400 w-1/2 flex flex-col gap-4 mb-5 ml-5 relative top-0 left-5 '>
      <motion.h1 transition={{duration:1 , delay:1}}  animate={{ x: 50 }} className=' text-4xl font-light'> Heffaf Mohamed Hicham </motion.h1>
      <motion.span   whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: 0, right: 100 }}
  className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent '>Frontend Developer</motion.span>
<p>{HERO_CONTENT}</p>
      </div>
      <div className='relative top-[20px] md:relative lg:right-20 lg:ml-8 '>
        <motion.img transition={{duration:1 , delay:1}}  animate={{ x: -50 }} className='object-cover h-[350px] w-[350px] mb-10 lg:h-[450px] lg:w-[450px]' src={Img} />
      </div>
    </div>
    </>
  )
}

export default Hero
