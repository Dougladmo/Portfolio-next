import { IoPerson, IoHome, IoBriefcase } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full bottom-0 md:left-1/2 md:-translate-x-1/2 md:bottom-10 bg-gradient-to-r from-slate-800 to-violet-950 md:max-w-lg py-2 px-12 md:rounded-full'>
        <ul className="flex items-center justify-around gap-10 text-xl text-white">
            <li className="backdrop-blur-lg hover:bg-white/30 p-3 rounded-full transition duration-500"><Link href='/'><IoHome/></Link></li>
            <li className="backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition duration-500"><Link href='/about'><IoPerson/></Link></li>
            <li className="backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition duration-500"><Link href='/experience'><IoBriefcase/></Link></li>
            <li className="backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition duration-500"><Link href='/projects'><FaComputer/></Link></li>
        </ul>
    </div>
  )
}

export default Navbar