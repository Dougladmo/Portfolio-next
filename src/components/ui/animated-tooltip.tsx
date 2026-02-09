"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface TooltipItem {
  id: number;
  name: string;
  designation?: string;
  image: string | React.ReactNode;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
  className?: string;
}

export const AnimatedTooltip = ({ items, className }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center", className)}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/20 rounded-lg shadow-xl z-50 whitespace-nowrap"
              >
                <div className="text-sm font-semibold text-white">
                  {item.name}
                </div>
                {item.designation && (
                  <div className="text-xs text-gray-400 mt-0.5">
                    {item.designation}
                  </div>
                )}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                  <div className="border-4 border-transparent border-t-black" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.1, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm",
              idx !== 0 && "-ml-3"
            )}
          >
            {typeof item.image === "string" ? (
              <Image
                src={item.image}
                alt={item.name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center text-white">
                {item.image}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
