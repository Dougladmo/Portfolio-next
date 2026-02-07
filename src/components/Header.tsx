import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <div className='w-full text-white max-w-[1350px] mx-auto p-6 md:p-8 flex items-center justify-between md:justify-between md:items-center relative bg-transparent'>
        <h1 className='flex flex-col text-3xl'>Douglas <span className=''>Oliveira</span></h1>
        <div>
          <ul className='flex gap-5'>
            <li><a className='text-2xl' href="#"><FaLinkedin/></a></li>
            <li><a className='text-2xl' href="#"><FaGithub/></a></li>
            <li><a className='text-2xl' href="#"><FaWhatsapp/></a></li>
            <li><a className='text-2xl' href="#"><IoMdMail/></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header