import { Oswald } from "next/font/google";
import Transition from "@/components/Transition";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql } from "react-icons/si";
import ColourfulText from "@/components/ui/colourful-text";

const oswald = Oswald({ subsets: ["latin"] });

export default function About() {
  const bioParagraphs = [
    "Olá! Sou o Douglas, Engenheiro de Software com mais de 3 anos de experiência, especializado em desenvolvimento full-stack e tecnologias web modernas. Minha jornada vai do frontend à arquitetura backend, com foco na construção de aplicações escaláveis e centradas no usuário usando React, Next.js, React Native e TypeScript.",
    "Minha expertise inclui desenvolvimento front-end abrangente com HTML5, CSS3, JavaScript e ecossistema React avançado, além de soluções backend robustas. Arquitetei infraestruturas serverless usando serviços AWS como Lambda, API Gateway, DynamoDB, S3 e SES, garantindo escalabilidade e eficiência de custos.",
    "Atualmente, sou Frontend Developer na Pepperlaw AI, onde liderei uma reestruturação completa da UI de uma base de código gerada por IA, transformando-a em uma aplicação pixel-perfect e de alta performance. Desenvolvi um editor estilo Word com suporte a Markdown, comentários e exportação multi-formato, e integrei WOPI (Web Application Open Platform Interface).",
    "Aplico consistentemente as melhores práticas em otimização de SEO, ajuste de performance (alcançando pontuações de 95+ no Google PageSpeed), e qualidade de código. Minha abordagem combina excelência técnica com pensamento estratégico, sempre visando entregar soluções inovadoras que resolvem problemas do mundo real usando tecnologias de ponta e metodologias modernas de desenvolvimento."
  ];

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
      <main className="w-full flex overflow-hidden relative pt-20 pb-32 md:pt-10 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center relative z-10">

          {/* Left Content - Bio */}
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <h1 className={`text-5xl uppercase md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl`}>
              Sobre <ColourfulText text="mim" />
            </h1>

            <div className="relative border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8 space-y-4 max-h-[52vh] overflow-y-auto custom-scrollbar">
                {bioParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-lg leading-relaxed font-light">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative p-4 flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Transition />
    </>
  );
}
