"use client";
import { IoPerson, IoHome, IoBriefcase } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { useTransition } from "@/components/TransitionContext";

const Navbar = () => {
  const { navigateTo } = useTransition();

  return (
    <div className='fixed z-50 w-full bottom-0 md:left-1/2 md:-translate-x-1/2 md:bottom-10 bg-black/40 backdrop-blur-lg border border-white/10 md:max-w-lg py-2 px-12 md:rounded-full shadow-2xl'>
        <ul className="flex items-center justify-around gap-10 text-xl text-white">
            <li className="hover:bg-purple-500/20 px-4 py-3 rounded-full transition-all duration-300 group relative">
              <button onClick={() => navigateTo('/')}>
                <IoHome className="group-hover:scale-110 transition-transform"/>
              </button>
            </li>
            <li className="hover:bg-purple-500/20 px-4 py-3 rounded-full transition-all duration-300 group relative">
              <button onClick={() => navigateTo('/about')}>
                <IoPerson className="group-hover:scale-110 transition-transform"/>
              </button>
            </li>
            <li className="hover:bg-purple-500/20 px-4 py-3 rounded-full transition-all duration-300 group relative">
              <button onClick={() => navigateTo('/experience')}>
                <IoBriefcase className="group-hover:scale-110 transition-transform"/>
              </button>
            </li>
            <li className="hover:bg-purple-500/20 px-4 py-3 rounded-full transition-all duration-300 group relative">
              <button onClick={() => navigateTo('/projects')}>
                <FaComputer className="group-hover:scale-110 transition-transform"/>
              </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
