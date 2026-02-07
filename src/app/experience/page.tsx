"use client";
import { Oswald } from "next/font/google";
import Transition from "@/components/Transition";
import { CometCard } from "@/components/ui/comet-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

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
      role: "Full-stack Mobile Developer ",
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
      <main className="w-full flex min-h-screen overflow-hidden relative">
        <div className="max-w-6xl mx-auto w-full px-4 py-20 md:py-32 md:pb-16">

          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 className={`${oswald.className} text-5xl flex justify-center md:text-7xl font-bold text-white tracking-tighter mb-4`}>
              <PointerHighlight>MINHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">JORNADA</span></PointerHighlight>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">Experiências Profissionais, Formação e Certificações</p>
          </div>

          {/* Experience Timeline Section */}
          <div className="mb-20">
            <h2 className={`${oswald.className} text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Experiência Profissional
            </h2>

            <div className="relative border-l-2 border-white/10 space-y-12 ml-4">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 ml-6 relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] w-4 h-4 bg-blue-500 rounded-full border-2 border-[#0a0a0a] group-hover:bg-purple-500 transition-colors duration-300" />

                  {/* Content Card */}
                  <div className="p-6 md:p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:bg-white/10 relative overflow-hidden shadow-2xl">

                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative corners */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

                    <div className="flex flex-col gap-3 mb-4">
                      <div>
                        <h3 className={`${oswald.className} text-2xl md:text-3xl font-bold text-white mb-1`}>{exp.role}</h3>
                        <p className="text-blue-400 font-semibold text-lg md:text-xl">{exp.company}</p>
                        {exp.location && <p className="text-gray-500 text-sm mt-1">{exp.location}</p>}
                      </div>
                      <span className="text-gray-400 text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-base">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                            <span className="text-blue-400 mt-1 flex-shrink-0 text-lg">▸</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs font-medium text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className={`${oswald.className} text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Formação Acadêmica
            </h2>
            <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-2xl">
              {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-2xl mb-2">Bacharel em Ciência da Computação</p>
                  <p className="text-blue-400 font-semibold text-xl">UNAMA - Universidade da Amazônia</p>
                  <p className="text-gray-400 text-base mt-2">Belém, Pará, Brasil</p>
                </div>
                <div className="text-gray-400 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit whitespace-nowrap">
                  Fev 2022 - Dez 2025
                </div>
              </div>
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mb-20">
            <h2 className={`${oswald.className} text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Certificações Profissionais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Professional Day 2025</p>
                    <p className="text-gray-400 text-base mb-1">Dell Technologies</p>
                    <p className="text-gray-500 text-sm">Out 2025</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Scrum Utilitário</p>
                    <p className="text-gray-400 text-base mb-1">MindMaster Treinamentos</p>
                    <p className="text-gray-500 text-sm">Out 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Front-end do Zero</p>
                    <p className="text-gray-400 text-base mb-1">Rocketseat</p>
                    <p className="text-gray-500 text-sm">Out 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Introdução ao Front-End Development</p>
                    <p className="text-gray-400 text-base mb-1">Meta via Coursera</p>
                    <p className="text-gray-500 text-sm">Mai 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Desenvolvimento Web: HTML, CSS, JS, React, TS</p>
                    <p className="text-gray-400 text-base mb-1">Udemy</p>
                    <p className="text-gray-500 text-sm">Abr 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Scrum Fundamentals Certified (SFC)</p>
                    <p className="text-gray-400 text-base mb-1">SCRUMstudy - Accreditation Body</p>
                    <p className="text-gray-500 text-sm">Abr 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Formação Java</p>
                    <p className="text-gray-400 text-base mb-1">Rocketseat</p>
                    <p className="text-gray-500 text-sm">Mar 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Trabalhando em um Mundo Digital</p>
                    <p className="text-gray-400 text-base mb-1">IBM</p>
                    <p className="text-gray-500 text-sm">Mar 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">IA-900 (Azure AI Fundamentals)</p>
                    <p className="text-gray-400 text-base mb-1">Microsoft</p>
                    <p className="text-gray-500 text-sm">Mar 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>
            </div>
          </div>

          {/* Cursos de Desenvolvimento */}
          <div className="pb-24">
            <h2 className={`${oswald.className} text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              Cursos de Desenvolvimento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Git com Blue</p>
                    <p className="text-gray-400 text-base mb-1">Blue EdTech</p>
                    <p className="text-gray-500 text-sm">Ago 2023</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Páginas Web com HTML5</p>
                    <p className="text-gray-400 text-base mb-1">Fundação Bradesco</p>
                    <p className="text-gray-500 text-sm">Ago 2023</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Técnicas Lógicas para JavaScript</p>
                    <p className="text-gray-400 text-base mb-1">FIAP</p>
                    <p className="text-gray-500 text-sm">Ago 2023</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Estilizando Páginas com CSS</p>
                    <p className="text-gray-400 text-base mb-1">Fundação Bradesco</p>
                    <p className="text-gray-500 text-sm">Ago 2023</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Versionamento de Código com Git</p>
                    <p className="text-gray-400 text-base mb-1">FIAP</p>
                    <p className="text-gray-500 text-sm">Ago 2023</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">JavaScript</p>
                    <p className="text-gray-400 text-base mb-1">Curso em Vídeo</p>
                    <p className="text-gray-500 text-sm">Out 2020</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">DISCOVER</p>
                    <p className="text-gray-400 text-base mb-1">Rocketseat</p>
                    <p className="text-gray-500 text-sm">Jun 2020</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>
            </div>
          </div>

        </div>
      </main>

      <Transition />
    </>
  );
}
