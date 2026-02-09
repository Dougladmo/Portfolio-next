"use client";
import { IoPerson, IoHome, IoBriefcase } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { useTransition } from "@/components/TransitionContext";

const Navbar = () => {
  const { navigateTo } = useTransition();

  return (
    <div className='fixed z-50 w-full bottom-0 md:left-1/2 md:-translate-x-1/2 md:bottom-10 bg-black/40 backdrop-blur-lg border border-white/10 md:max-w-lg py-2 px-12 md:rounded-full shadow-2xl'>
        <ul className="flex items-center justify-around gap-10 text-xl text-white">
            <li className="group relative flex-1">
              <button onClick={() => navigateTo('/')} className="w-full h-full px-4 py-3 flex items-center justify-center">
                <IoHome className="group-hover:scale-110 transition-transform"/>
              </button>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
            </li>
            <li className="group relative flex-1">
              <button onClick={() => navigateTo('/about')} className="w-full h-full px-4 py-3 flex items-center justify-center">
                <IoPerson className="group-hover:scale-110 transition-transform"/>
              </button>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
            </li>
            <li className="group relative flex-1">
              <button onClick={() => navigateTo('/experience')} className="w-full h-full px-4 py-3 flex items-center justify-center">
                <IoBriefcase className="group-hover:scale-110 transition-transform"/>
              </button>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
            </li>
            <li className="group relative flex-1">
              <button onClick={() => navigateTo('/projects')} className="w-full h-full px-4 py-3 flex items-center justify-center">
                <FaComputer className="group-hover:scale-110 transition-transform"/>
              </button>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
