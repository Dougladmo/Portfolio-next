import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import ColourfulText from './ui/colourful-text';

const Header = () => {
  return (
    <div className='w-full text-white max-w-[1350px] mx-auto p-6 md:p-8 flex items-center justify-between relative bg-transparent'>
        <h1 className='text-2xl md:text-3xl font-bold'>
          <span className='text-white'>Douglas</span>
          <span > <ColourfulText text=" Oliveira"/> </span>
        </h1>
        <div>
          <ul className='flex gap-5'>
            <li><a className='text-2xl hover:text-blue-400 transition-colors' href="#"><FaLinkedin/></a></li>
            <li><a className='text-2xl hover:text-purple-400 transition-colors' href="#"><FaGithub/></a></li>
            <li><a className='text-2xl hover:text-green-400 transition-colors' href="#"><FaWhatsapp/></a></li>
            <li><a className='text-2xl hover:text-pink-400 transition-colors' href="#"><IoMdMail/></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header