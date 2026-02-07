"use client";
import { Oswald } from "next/font/google";
import Transition from "@/components/Transition";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const oswald = Oswald({ subsets: ["latin"] });

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "PepperLaw",
      period: "Ago 2025 - Presente (7 meses)",
      location: "São Paulo, Brasil",
      description: "Entrei em uma startup com codebase desorganizada construída com React e Supabase, onde funcionalidades-chave estavam quebradas e a implementação da UI não correspondia aos designs do Figma. Reestruturei completamente a arquitetura front-end para criar um sistema profissional e manutenível que melhorou a experiência do usuário, usabilidade e velocidade de desenvolvimento.",
      highlights: [
        "Implementei um editor Markdown com sistema de comentários e funcionalidade de exportação de arquivos",
        "Corrigi bugs críticos em toda a plataforma garantindo integração perfeita entre componentes front-end e back-end",
        "Ajudei a garantir o primeiro cliente pagante da startup ao entregar uma plataforma estável e pronta para produção"
      ],
      skills: ["React", "Supabase", "Markdown", "WOPI", "Bug Fixing"]
    },
    {
      role: "Co-Founder & Fullstack Developer",
      company: "Nobuggy",
      period: "Jan 2025 - Presente (1 ano 2 meses)",
      location: "São Paulo, Brasil",
      description: "Co-fundei a Nobuggy em 2025 como uma empresa de soluções digitais, liderando o ciclo completo de desenvolvimento de software desde a prospecção de clientes e planejamento até a entrega de produtos digitais escaláveis e de alto impacto para clientes B2B e B2C.",
      highlights: [
        "Desenvolvo aplicações web fullstack usando ecossistema React, Next.js, Node.js, AWS, Supabase e Google API",
        "Crio agentes de IA com n8n para automação de vendas e atendimento via WhatsApp e LinkedIn - construí workflows inteligentes que ajudaram clientes a economizar R$20.000-30.000 em custos operacionais e um agente alcançou taxa de conversão média de 20% de 500 leads",
        "Planejamento e implementação de arquiteturas serverless escaláveis usando AWS Lambda, S3 e Firebase",
        "Gerei mais de R$30.000+ em receita em seis meses (média de R$7K/mês), entregando soluções que criaram potencial de receita de seis dígitos para clientes"
      ],
      skills: ["Next.js", "React", "AWS Lambda", "n8n", "AI Agents", "Supabase", "Google API"]
    },
    {
      role: "Fullstack Developer",
      company: "Workana",
      period: "Nov 2020 - Set 2025 (4 anos 11 meses)",
      location: "Remoto",
      description: "Alcancei ranking Hero Tier como #245 globalmente de 11,76 milhões de freelancers e TOP #45 na categoria IT & Programação mundialmente (#20 no Brasil), demonstrando entrega consistente de alta qualidade e satisfação do cliente.",
      highlights: [
        "Desenvolvi aplicações web de alta performance usando React, Next.js e TypeScript com foco em UX, SEO e performance (alcançando pontuações Lighthouse de 95+)",
        "Integrei MongoDB, Supabase e APIs RESTful para gerenciamento seguro de dados",
        "Construí agentes de IA e workflows de automação usando n8n que alcançaram mais de 30% de taxa de conversão",
        "Ajudei clientes a economizar mais de R$30.000 em custos operacionais mantendo média de 5 estrelas em todos os projetos entregues"
      ],
      skills: ["React", "Next.js", "TypeScript", "MongoDB", "Supabase", "SEO", "n8n"]
    },
    {
      role: "Full-stack Mobile Developer (Pleno)",
      company: "C2A Soluções Em Tecnologia",
      period: "Out 2024 - Abr 2025 (7 meses)",
      location: "Belém, Pará, Brasil",
      description: "Liderei o desenvolvimento end-to-end como único desenvolvedor de um aplicativo mobile de engajamento cívico para Belém do Pará, reunindo requisitos diretamente com o dono da empresa e construindo uma plataforma para cidadãos relatarem problemas urbanos como buracos e problemas de gestão de resíduos.",
      highlights: [
        "Construí aplicativo mobile multiplataforma usando React Native e Expo",
        "Integrei Google Maps API e Geolocalização para relato preciso de problemas baseado em localização e mapeamento em tempo real",
        "Migrei infraestrutura backend para arquitetura serverless AWS Lambda com DynamoDB, reduzindo custos operacionais em aproximadamente R$5.000/mês enquanto garantia escalabilidade para implantação em toda a cidade"
      ],
      skills: ["React Native", "Expo", "AWS Lambda", "DynamoDB", "Google Maps API", "Geolocation"]
    },
  ];

  return (
    <>
      <main className="w-full min-h-screen relative overflow-y-auto bg-[#0a0a0a]">
        {/* MacBook Scroll Effect */}
        <MacbookScroll
          title={
            <span className={`${oswald.className} text-5xl md:text-7xl font-bold tracking-tighter`}>
              MINHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">JORNADA</span>
            </span>
          }
        >
          {/* Experience Timeline inside MacBook Screen */}
          <div className="w-full h-full bg-transparent p-8 overflow-auto">
            <div className="relative border-l-2 border-white/10 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 ml-6 relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] w-4 h-4 bg-blue-500 rounded-full border-2 border-[#0a0a0a] group-hover:bg-purple-500 transition-colors duration-300" />

                  {/* Content Card */}
                  <div className="p-4 border border-white/10 bg-[#0a0a0a]/80 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#0a0a0a]/90 relative overflow-hidden">

                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col gap-2 mb-3">
                      <div>
                        <h3 className={`${oswald.className} text-lg font-bold text-white`}>{exp.role}</h3>
                        <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                        {exp.location && <p className="text-gray-500 text-xs">{exp.location}</p>}
                      </div>
                      <span className="text-gray-400 text-xs bg-white/5 px-2 py-1 rounded-full border border-white/10 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-3 leading-relaxed font-light text-xs">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-1 mb-3">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-gray-300 text-[10px]">
                            <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                            <span className="leading-relaxed font-light">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-[9px] font-medium text-gray-300 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MacbookScroll>

        {/* Education & Certifications Section - After MacBook */}
        <div className="max-w-4xl mx-auto w-full px-4 py-16 relative z-10">

          {/* Education Section */}
          <div className="mb-12">
            <h2 className={`${oswald.className} text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Formação Acadêmica
            </h2>
            <div className="relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-xl mb-1">Bacharel em Ciência da Computação</p>
                  <p className="text-blue-400 font-medium text-lg">UNAMA - Universidade da Amazônia</p>
                  <p className="text-gray-400 text-sm mt-2">Belém, Pará, Brasil</p>
                </div>
                <div className="text-gray-400 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit whitespace-nowrap">
                  Fev 2022 - Dez 2025
                </div>
              </div>
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mb-12">
            <h2 className={`${oswald.className} text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Certificações Profissionais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Professional Day 2025</p>
                <p className="text-gray-400 text-sm mb-1">Dell Technologies</p>
                <p className="text-gray-500 text-xs">Out 2025</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Scrum Utilitário</p>
                <p className="text-gray-400 text-sm mb-1">MindMaster Treinamentos</p>
                <p className="text-gray-500 text-xs">Out 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Front-end do Zero</p>
                <p className="text-gray-400 text-sm mb-1">Rocketseat</p>
                <p className="text-gray-500 text-xs">Out 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Introdução ao Front-End Development</p>
                <p className="text-gray-400 text-sm mb-1">Meta via Coursera</p>
                <p className="text-gray-500 text-xs">Mai 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Desenvolvimento Web: HTML, CSS, JS, React, TS</p>
                <p className="text-gray-400 text-sm mb-1">Udemy</p>
                <p className="text-gray-500 text-xs">Abr 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Scrum Fundamentals Certified (SFC)</p>
                <p className="text-gray-400 text-sm mb-1">SCRUMstudy - Accreditation Body</p>
                <p className="text-gray-500 text-xs">Abr 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Formação Java</p>
                <p className="text-gray-400 text-sm mb-1">Rocketseat</p>
                <p className="text-gray-500 text-xs">Mar 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Trabalhando em um Mundo Digital</p>
                <p className="text-gray-400 text-sm mb-1">IBM</p>
                <p className="text-gray-500 text-xs">Mar 2024</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">IA-900 (Azure AI Fundamentals)</p>
                <p className="text-gray-400 text-sm mb-1">Microsoft</p>
                <p className="text-gray-500 text-xs">Mar 2024</p>
              </div>
            </div>
          </div>

          {/* Cursos de Desenvolvimento */}
          <div className="pb-24">
            <h2 className={`${oswald.className} text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              Cursos de Desenvolvimento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Git com Blue</p>
                <p className="text-gray-400 text-sm mb-1">Blue EdTech</p>
                <p className="text-gray-500 text-xs">Ago 2023</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Páginas Web com HTML5</p>
                <p className="text-gray-400 text-sm mb-1">Fundação Bradesco</p>
                <p className="text-gray-500 text-xs">Ago 2023</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Técnicas Lógicas para JavaScript</p>
                <p className="text-gray-400 text-sm mb-1">FIAP</p>
                <p className="text-gray-500 text-xs">Ago 2023</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Estilizando Páginas com CSS</p>
                <p className="text-gray-400 text-sm mb-1">Fundação Bradesco</p>
                <p className="text-gray-500 text-xs">Ago 2023</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">Versionamento de Código com Git</p>
                <p className="text-gray-400 text-sm mb-1">FIAP</p>
                <p className="text-gray-500 text-xs">Ago 2023</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">JavaScript</p>
                <p className="text-gray-400 text-sm mb-1">Curso em Vídeo</p>
                <p className="text-gray-500 text-xs">Out 2020</p>
              </div>

              <div className="group relative p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-semibold text-base mb-2">DISCOVER</p>
                <p className="text-gray-400 text-sm mb-1">Rocketseat</p>
                <p className="text-gray-500 text-xs">Jun 2020</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Transition />
    </>
  );
}
