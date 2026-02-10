"use client";
import { IoPerson, IoHome, IoBriefcase } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { useTransition } from "@/components/TransitionContext";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

const Navbar = () => {
  const { navigateTo } = useTransition();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { id: 1, name: "Início", icon: IoHome, route: "/" },
    { id: 2, name: "Sobre", icon: IoPerson, route: "/about" },
    { id: 3, name: "Experiência", icon: IoBriefcase, route: "/experience" },
    { id: 4, name: "Projetos", icon: FaComputer, route: "/projects" },
  ];

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className='fixed z-50 w-full bottom-0 md:left-1/2 md:-translate-x-1/2 md:bottom-10 bg-black/40 backdrop-blur-lg border border-white/10 md:max-w-lg py-2 px-12 md:rounded-full shadow-2xl'>
        <ul className="flex items-center justify-around gap-10 text-xl text-white">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="group relative flex-1"
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence mode="popLayout">
                    {hoveredIndex === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 10,
                          },
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.6 }}
                        style={{
                          translateX: translateX,
                          rotate: rotate,
                          whiteSpace: "nowrap",
                        }}
                        className="absolute -top-16 -translate-x-1/2 z-[60] flex flex-col items-center justify-center rounded-lg px-4 py-2.5"
                      >
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-px z-30 h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-px z-30 h-px w-[30%] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                        <div className="relative z-30 text-sm font-bold text-white">
                          {item.name}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={() => navigateTo(item.route)}
                    onMouseMove={handleMouseMove}
                    className="w-full h-full px-4 py-3 flex items-center justify-center"
                  >
                    <Icon className="group-hover:scale-110 transition-transform"/>
                  </button>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
                </li>
              );
            })}
        </ul>
    </div>
  )
}

export default Navbar
