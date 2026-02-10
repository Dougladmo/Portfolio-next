"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export type TooltipItem = {
  id: number;
  name: string;
  designation?: string;
  image: React.ReactNode;
};

export const AnimatedTooltip = ({
  items,
}: {
  items: TooltipItem[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
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
                className="absolute -top-16 rotate-3 left-1/2 -translate-x-1/2 z-[50] flex flex-col items-center justify-center rounded-lg px-4 py-2.5"
              >
                {/* Bottom gradient lines - centered */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-px z-30 h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-px z-30 h-px w-[30%] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                <div className="relative z-30 text-sm font-bold text-white">
                  {item.name}
                </div>
                {item.designation && (
                  <div className="text-xs text-gray-400 mt-1">{item.designation}</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white/20 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center !p-0 transition-all duration-300 group-hover:z-30 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20"
          >
            <div className="w-7 h-7 flex items-center justify-center text-white">
              {item.image}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
