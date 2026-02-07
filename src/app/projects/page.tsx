"use client";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo"
import { CometCard } from "@/components/ui/comet-card"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { Oswald } from "next/font/google"

const oswald = Oswald({ subsets: ["latin"] });

const projectStacks = [
  {
    title: "Moonbeam",
    description: "Plataforma de escrita assistida por IA",
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS", "PostgreSQL"],
    category: "IA & Produtividade"
  },
  {
    title: "Cursor",
    description: "Editor de código com IA integrada",
    stack: ["React", "Electron", "Node.js", "AI Models", "Monaco Editor"],
    category: "Ferramentas de Desenvolvimento"
  },
  {
    title: "Rogue",
    description: "Sistema de gerenciamento de projetos",
    stack: ["Vue.js", "Express", "MongoDB", "Socket.io", "Redis"],
    category: "Gerenciamento"
  },
  {
    title: "Editorially",
    description: "Editor colaborativo em tempo real",
    stack: ["React", "Slate.js", "WebSockets", "Node.js", "AWS"],
    category: "Colaboração"
  },
  {
    title: "Editrix AI",
    description: "Editor de conteúdo com IA",
    stack: ["Next.js", "GPT-4", "Supabase", "Vercel", "Tailwind CSS"],
    category: "IA & Edição"
  },
  {
    title: "Pixel Perfect",
    description: "Ferramenta de design para desenvolvedores",
    stack: ["React", "Three.js", "WebGL", "TypeScript", "Framer Motion"],
    category: "Design & UI"
  },
  {
    title: "Algochurn",
    description: "Plataforma de prática de algoritmos",
    stack: ["React", "Python", "FastAPI", "Docker", "PostgreSQL"],
    category: "Educação"
  },
  {
    title: "Aceternity UI",
    description: "Biblioteca de componentes modernos",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
    category: "UI Library"
  },
  {
    title: "Tailwind Master Kit",
    description: "Kit completo de templates Tailwind",
    stack: ["HTML", "Tailwind CSS", "Alpine.js", "PostCSS", "Vite"],
    category: "Templates"
  }
];

const Projetos = () => {
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
              <PointerHighlight>TECNOLOGIAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">UTILIZADAS</span></PointerHighlight>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Conheça as stacks tecnológicas por trás de cada projeto
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectStacks.map((project, index) => (
              <CometCard key={index} rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[280px] flex flex-col">

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className={`${oswald.className} text-2xl font-bold text-white mb-2`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-pink-500/0 mb-4" />

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/20 hover:border-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Corners */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 flex justify-center gap-20">
            <div className="text-center">
              <div className={`${oswald.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2`}>
                15+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <div className={`${oswald.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2`}>
                10+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Tecnologias e Ferramentas</p>
            </div>
            
            <div className="text-center">
              <div className={`${oswald.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-2`}>
                3+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Anos de Experiência</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projetos
