import { Oswald } from "next/font/google";
import Transition from "@/components/Transition";

const oswald = Oswald({ subsets: ["latin"] });

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "PepperLaw",
      period: "Ago 2025 - Presente",
      description: "Liderança na reestruturação de UI de uma base de código legada, implementando um editor Markdown estilo Word e garantindo componentes de alta performance. O trabalho contribuiu diretamente para garantir o primeiro cliente corporativo da startup.",
      skills: ["React", "Supabase", "Markdown", "Optimization"]
    },
    {
      role: "Co-Founder & Fullstack Developer",
      company: "Nobuggy",
      period: "Jan 2025 - Presente",
      description: "Co-fundador de uma empresa de soluções digitais. Desenvolvimento de aplicações fullstack (Next.js, AWS, Supabase) e agentes de IA com n8n para automação de vendas, gerando economia operacional significativa para clientes.",
      skills: ["Next.js", "AWS Lambda", "n8n", "AI Agents"]
    },
    {
      role: "Fullstack Developer",
      company: "Workana",
      period: "Nov 2020 - Set 2025",
      description: "Top 1% freelancer global (Hero Tier). Desenvolvimento de aplicações web de alta performance focadas em UX e SEO, além de construir fluxos de automação com IA que aumentaram taxas de conversão.",
      skills: ["React", "TypeScript", "SEO", "Automation"]
    },
    {
      role: "Full-stack Mobile Developer",
      company: "C2A Soluções",
      period: "Out 2024 - Abr 2025",
      description: "Desenvolvimento de app mobile de engajamento cívico com React Native e Google Maps. Migração de backend para arquitetura serverless AWS, reduzindo custos operacionais.",
      skills: ["React Native", "Expo", "AWS DynamoDB", "Google Maps"]
    },
    {
      role: "Back-end Developer",
      company: "Avatech",
      period: "Abr 2024 - Mar 2025",
      description: "Desenvolvimento de API serverless com Firebase, garantindo tempos de resposta sub-300ms. Criação de sistema de quizzes adaptativos alimentado por LLMs.",
      skills: ["Firebase", "Stripe", "LLM", "Node.js"]
    },
    {
      role: "Fullstack Developer",
      company: "CASTA TECNOLOGIA",
      period: "Abr 2023 - Jul 2024",
      description: "Desenvolvimento de sites institucionais e landing pages estratégicas usando React e Next.js. Implementação de APIs RESTful e otimização de performance.",
      skills: ["React", "Next.js", "Tailwind CSS", "REST APIs"]
    }
  ];

  return (
    <>
      <main className="w-full min-h-screen relative pt-24 pb-32 md:pb-12 px-4 overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full h-full flex flex-col items-center relative z-10">

          <h1 className={`${oswald.className} text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl mb-12 text-center`}>
            MINHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">JORNADA</span>
          </h1>

          <div className="relative border-l-2 border-white/10 ml-3 md:ml-0 space-y-12 pb-12">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-8 relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[43px] w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0a0a0a] group-hover:bg-purple-500 transition-colors duration-300" />

                {/* Content Card */}
                <div className="p-6 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 relative overflow-hidden">

                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className={`${oswald.className} text-xl md:text-2xl font-bold text-white`}>{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs font-medium text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Transition />
    </>
  );
}