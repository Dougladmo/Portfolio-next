"use client";

import { Oswald } from "next/font/google";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql } from "react-icons/si";
import ColourfulText from "@/components/ui/colourful-text";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CometCard } from "@/components/ui/comet-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useLanguage } from "@/components/LanguageContext";

const oswald = Oswald({ subsets: ["latin"] });

export default function About() {
  const { t } = useLanguage();

  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  return (
    <>
      <main className="w-full flex overflow-hidden relative pt-8 pb-32 md:pt-10 md:pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full h-full flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center relative z-10">

          {/* Left Content - Bio */}
          <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in-up w-full">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold tracking-tighter text-white drop-shadow-2xl`}>
              <PointerHighlight>{t.about.headingPrefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{t.about.headingHighlight}</span></PointerHighlight>
            </h1>

            <div className="relative border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8 space-y-4 max-h-[52vh] overflow-y-auto custom-scrollbar">
                {t.about.bioParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg pointer-events-none" />
            </div>

          </div>

          {/* Right Content - Skills */}
          <div className="flex-1 w-full animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <CometCard key={index} rotateDepth={15} translateDepth={15}>
                  <div className="relative p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-4 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[120px] md:min-h-[140px]">
                    <div className="text-4xl md:text-5xl filter drop-shadow-lg transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300 transition-colors text-center">
                      {skill.name}
                    </span>

                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                  </div>
                </CometCard>
              ))}
            </div>
          </div>

        </div>
      </main>

    </>
  );
}
