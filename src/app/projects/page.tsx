"use client";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo"
import { CometCard } from "@/components/ui/comet-card"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { AnimatedTooltip, TooltipItem } from "@/components/ui/animated-tooltip"
import { getTechIcon } from "@/utils/tech-icons"
import { Oswald } from "next/font/google"
import { useLanguage } from "@/components/LanguageContext"
import { useState } from "react"

const oswald = Oswald({ subsets: ["latin"] });

// Componente separado para cada card de projeto
const ProjectCard = ({ project, stackItems }: { project: any; stackItems: TooltipItem[] }) => {
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);

  return (
    <CometCard rotateDepth={12} translateDepth={12}>
      <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[280px] flex flex-col">

        {/* Category Badge */}
        <div className="mb-4">
          <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className={`${oswald.className} ${
          isTooltipHovered ? 'opacity-20' : 'blur-0 opacity-100'
        } text-2xl font-bold text-white mb-2`}>
          {project.title}
        </h3>

        {/* Description com blur/escurecimento condicional */}
        <p className={`text-gray-400 text-sm mb-4 flex-grow transition-all duration-300 ${
          isTooltipHovered ? 'opacity-20' : 'blur-0 opacity-100'
        }`}>
          {project.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-pink-500/0 mb-4" />

        {/* Tech Stack com AnimatedTooltip */}
        <div
          className="flex items-center"
          onMouseEnter={() => setIsTooltipHovered(true)}
          onMouseLeave={() => setIsTooltipHovered(false)}
        >
          <AnimatedTooltip items={stackItems} />
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
      </div>
    </CometCard>
  );
};

const Projetos = () => {
  const { t } = useLanguage();

  return (
    <div className="text-white">
      <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.8s_forwards]">
        <HeroParallaxDemo />
      </div>

      {/* Tech Stack Section */}
      <div className="w-full bg-transparent relative z-10 py-20 pb-40">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className={`${oswald.className} text-4xl md:text-6xl font-bold text-white mb-4 flex justify-center`}>
              <PointerHighlight>{t.projects.techHeadingPrefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{t.projects.techHeadingHighlight}</span></PointerHighlight>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              {t.projects.techSubtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.cards.map((project, index) => {
              // Preparar dados para AnimatedTooltip
              const stackItems: TooltipItem[] = project.stack.map((tech, idx) => {
                const IconComponent = getTechIcon(tech);
                return {
                  id: idx,
                  name: tech,
                  image: <IconComponent className="w-6 h-6" />,
                };
              });

              return (
                <ProjectCard key={index} project={project} stackItems={stackItems} />
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 flex justify-center gap-20">
            <div className="text-center">
              <div className={`${oswald.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2`}>
                15+
              </div>
              <p className="text-gray-400 text-sm md:text-base">{t.projects.statProjects}</p>
            </div>
            <div className="text-center">
              <div className={`${oswald.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2`}>
                10+
              </div>
              <p className="text-gray-400 text-sm md:text-base">{t.projects.statTech}</p>
            </div>

            <div className="text-center">
              <div className={`${oswald.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-2`}>
                3+
              </div>
              <p className="text-gray-400 text-sm md:text-base">{t.projects.statYears}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projetos
