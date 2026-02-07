import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <div className='w-full text-white max-w-[1350px] mx-auto p-6 md:p-8 flex items-center justify-end relative bg-transparent'>
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