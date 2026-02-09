"use client";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Cover } from "@/components/ui/cover";
import { useLanguage } from "@/components/LanguageContext";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className="w-full flex overflow-hidden relative">
        {/* Background ambient glow */}
        <div className="z-10 flex flex-col md:flex-row-reverse md:justify-between md:items-center items-center justify-start text-center md:text-left gap-3 md:gap-12 relative max-w-7xl mx-auto px-4 w-full h-full py-0 md:pt-16">
          {/* Right Content - Visual Interaction */}
          <div className="flex justify-center py-1 scale-[0.7] md:scale-100">
            <div className="relative p-2 border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <div>
                <Image
                  src="/profile.jpeg"
                  width={400}
                  height={400}
                  className="rounded-xl"
                  alt="Douglas dev"
                />
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute top-0 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500/50" />
            <div className="absolute top-0 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-500/50" />
            <div className="absolute bottom-0 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500/50" />
            <div className="absolute bottom-0 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500/50" />
          </div>

          {/* Left Content - Text and CTA */}
          <div className="flex flex-col gap-3 md:gap-6">
            {/* Top Text Group */}
            <div className="space-y-1 md:space-y-2 animate-fade-in-up">
              <h1 className="text-4xl sm:text-4xl uppercase flex flex-col gap-4 md:text-5xl lg:text-6xl font-bold font-oswald tracking-tighter text-white drop-shadow-2xl">
                  <span>{t.home.heroLine1}</span> <span > <Cover className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{t.home.heroLine2}</Cover></span>
              </h1>
            </div>

            {/* Bottom Content */}
            <div className="space-y-3 md:space-y-4 animate-fade-in-up delay-200">
              <h2 className="text-sm md:text-lg max-w-md font-light text-gray-400 tracking-wide">
                {t.home.subtitle}
              </h2>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 md:justify-start justify-center items-center">
                <a
                  href="/projects"
                  className="group relative px-5 py-2 md:px-8 md:py-3 bg-white text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] text-xs md:text-base"
                >
                  <span className="relative z-10">{t.home.viewProjects}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity blur-md" />
                </a>

                <a
                  href="https://wa.me/5591981941219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 md:px-8 md:py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm text-xs md:text-base"
                >
                  {t.home.getInTouch}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
