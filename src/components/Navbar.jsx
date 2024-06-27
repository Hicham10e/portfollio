import React from 'react'
import { FaFacebook,FaLinkedin,FaGithub,FaTwitter, } from "react-icons/fa";

  
function Navbar() {
  return (
  <>
    <header className='container '>
        <nav className='flex justify-end gap-20 w-[90%] h-[100px] items-center text-white md:flex md:justify-between md:gap-0 '>
        <div>
        <a className='text-3xl pl-7 text-gray-400 cursor-pointer hover:bg-gradient-to-r hover:from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text hover:tracking-tight hover:text-transparent'>HM</a>
        </div>
       
        <div className='flex justify-between md:justify-end '>
        <a className='text-2xl p-4  cursor-pointer hover:text-purple-400 ' href='https://www.facebook.com' target='_blank'> <FaFacebook/> </a>     
        <a className='text-2xl p-4  cursor-pointer hover:text-purple-400 '> <FaLinkedin/> </a>     
        <a className='text-2xl p-4  cursor-pointer hover:text-purple-400 '> <FaGithub/> </a>    
        <a className='text-2xl p-4  cursor-pointer  hover:text-purple-400 '> <FaTwitter/> </a>     
        </div>
    
        </nav>
    </header>
  </>
  )
}

export default Navbar
