"use client";

import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import LanguageToggle from './LanguageToggle';

const Header = () => {
  return (
    <div className='w-full text-white max-w-[1350px] mx-auto p-6 md:p-8 flex items-center justify-between relative bg-transparent'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>
          <span className='text-white'>Douglas</span>
          <span className='text-white'> Oliveira</span>
        </h1>
        <div className='flex items-center gap-2 sm:gap-4'>
          <LanguageToggle />
          <ul className='flex gap-3 sm:gap-4 md:gap-5'>
            <li><a className='text-xl sm:text-2xl hover:text-blue-400 transition-colors' target='_blank' href="https://www.linkedin.com/in/douglas-desenvolvedor-software"><FaLinkedin/></a></li>
            <li><a className='text-xl sm:text-2xl hover:text-purple-400 transition-colors' target='_blank' href="https://github.com/dougladmo"><FaGithub/></a></li>
            <li><a className='text-xl sm:text-2xl hover:text-green-400 transition-colors' target='_blank' href="https://wa.me/5591981941219"><FaWhatsapp/></a></li>
            <li><a className='text-xl sm:text-2xl hover:text-pink-400 transition-colors' target='_blank' href="mailto:douglasdmoliver@gmail.com"><IoMdMail/></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header
