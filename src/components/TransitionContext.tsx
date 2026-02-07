"use client";
import { createContext, useContext, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimationControls } from "framer-motion";

type TransitionContextType = {
  navigateTo: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const isAnimating = useRef(false);

  const navigateTo = useCallback(
    async (href: string) => {
      if (isAnimating.current || href === pathname) return;
      isAnimating.current = true;

      // Phase 1: Cover (left → right)
      controls1.start({ x: "100%" }, { delay: 0.2, duration: 0.6, ease: "easeInOut" });
      controls2.start({ x: "100%" }, { delay: 0.4, duration: 0.6, ease: "easeInOut" });
      await controls3.start({ x: "100%" }, { delay: 0.6, duration: 0.6, ease: "easeInOut" });

      // Navigate while screen is covered
      router.push(href);

      // Let React render the new page behind the curtain
      await new Promise((r) => setTimeout(r, 100));

      // Phase 2: Reveal (right → left)
      controls1.start({ x: "0%" }, { delay: 0.2, duration: 0.6, ease: "easeInOut" });
      controls2.start({ x: "0%" }, { delay: 0.4, duration: 0.6, ease: "easeInOut" });
      await controls3.start({ x: "0%" }, { delay: 0.6, duration: 0.6, ease: "easeInOut" });

      isAnimating.current = false;
    },
    [controls1, controls2, controls3, router, pathname]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-purple-950 pointer-events-none"
        initial={{ x: "0%", width: "100%" }}
        animate={controls1}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[59] bg-purple-800 pointer-events-none"
        initial={{ x: "0%", width: "100%" }}
        animate={controls2}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[58] bg-purple-600 pointer-events-none"
        initial={{ x: "0%", width: "100%" }}
        animate={controls3}
      />
    </TransitionContext.Provider>
  );
}
