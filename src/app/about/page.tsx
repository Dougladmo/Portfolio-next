import { Oswald } from "next/font/google";
import Transition from "@/components/Transition";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql } from "react-icons/si";

const oswald = Oswald({ subsets: ["latin"] });

export default function About() {
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
      <main className="w-full flex min-h-screen overflow-hidden relative pt-24 pb-32 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col md:flex-row gap-12 items-start md:items-center relative z-10">

          {/* Left Content - Bio */}
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <h1 className={`${oswald.className} text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl`}>
              SOBRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">MIM</span>
            </h1>

            <div className="relative p-6 md:p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md shadow-2xl">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Olá! Sou o Douglas, Engenheiro de Software com mais de 3 anos de experiência, especializado em desenvolvimento full-stack e tecnologias web modernas.
                Minha jornada vai do frontend à arquitetura backend, com foco na construção de aplicações escaláveis e centradas no usuário.
              </p>
              <br />
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Tenho experiência abrangente em desenvolvimento de soluções robustas, arquitetando infraestruturas serverless escaláveis com AWS
                (Lambda, API Gateway, DynamoDB) e integrando serviços avançados para entregar funcionalidades de alto valor.
              </p>

              {/* Decorative elements */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="flex-1 w-full animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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