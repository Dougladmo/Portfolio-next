"use client";
import { Oswald } from "next/font/google";
import { CometCard } from "@/components/ui/comet-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const oswald = Oswald({ subsets: ["latin"] });

export default function Experience() {
  const experiences = [
    {
      role: "Desenvolvedor Frontend",
      company: "Pepperlaw AI",
      period: "Ago 2025 - Atual",
      location: "Remoto",
      description: "Entrei em um projeto com o front-end gerado com IA da Lovable, completamente desorganizado e cheio de falhas. Precisava reestruturar a UI para alinhar ao design do time de Design/UX e tornar o produto viável para clientes corporativos.",
      highlights: [
        "Liderei a reestruturação da UI utilizando React pixel-perfect com o design da equipe de Design/UX, criando componentes mais fáceis de manter, com melhora na performance, experiência do usuário, navegação fluida e responsiva.",
        "Desenvolvi um editor similar ao Word com suporte a Markdown, comentários e exportação em múltiplos formatos, além de integrar posteriormente o sistema ao WOPI (Web Application Open Platform Interface).",
        "Essa reformulação, feita em conjunto com a equipe de desenvolvimento, elevou a qualidade do produto, reduziu bugs críticos e contribuiu diretamente para a conquista do primeiro cliente corporativo da startup."
      ],
      skills: ["React", "Markdown", "WOPI", "UI/UX", "Performance"]
    },
    {
      role: "Desenvolvedor Full Stack Pleno",
      company: "C2A Soluções em Tecnologia",
      period: "Out 2024 - Mar 2025",
      location: "Belém, Pará, Brasil",
      description: "Fui responsável por todo o ciclo de desenvolvimento de um aplicativo de reports urbanos em Belém do Pará, desde o levantamento de requisitos até a publicação nas lojas Android e iOS.",
      highlights: [
        "Desenvolvi o aplicativo completo utilizando React Native e Expo, cobrindo desde o levantamento de requisitos até a publicação nas lojas.",
        "Integrei as APIs do Google Maps e Google Places para permitir geolocalização e renderização em tempo real dos pontos reportados.",
        "Estruturei o backend do zero em arquitetura serverless usando AWS Lambda, API Gateway, S3, DynamoDB e SES, garantindo escalabilidade e baixo custo de operação.",
        "Entreguei um sistema completo, funcional e estável, que atendeu integralmente às necessidades do cliente e passou a operar em produção sem incidentes, sendo colocado na Play Store."
      ],
      skills: ["React Native", "Expo", "AWS Lambda", "DynamoDB", "Google Maps API", "API Gateway", "S3", "SES"]
    },
    {
      role: "Desenvolvedor Back End Pleno",
      company: "Avatech",
      period: "Abr 2024 - Mar 2025",
      location: "Remoto",
      description: "Fui contratado como freelancer para desenvolver um sistema serverless completo do zero, utilizando Firebase Cloud Functions, Firestore e Node.js.",
      highlights: [
        "Criei um sistema de quizzes com IA baseado em LLMs, permitindo a geração automática de provas personalizadas e correção inteligente conforme as regras de negócio.",
        "Implementei um sistema de agendamento automático que ajusta a dificuldade das provas conforme o desempenho do aluno.",
        "Integrei a Stripe para pagamentos por assinatura e links dinâmicos, entregando um sistema sólido e seguro, com checkout otimizado e alta taxa de retenção."
      ],
      skills: ["Firebase", "Cloud Functions", "Firestore", "Node.js", "LLMs", "Stripe", "Serverless"]
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "CASTA Tecnologia",
      period: "Ago 2022 - Jul 2024",
      location: "Belém, Pará, Brasil",
      description: "Atuei no desenvolvimento e manutenção de projetos web profissionais, incluindo reconstruções completas de sites, landing pages e sistemas com foco em performance, SEO e experiência do usuário.",
      highlights: [
        "Implementei integrações com APIs REST e otimizações de SEO e velocidade (Google PageSpeed 95+), garantindo alto desempenho e usabilidade.",
        "Reconstruí completamente um site de advocacia antes feito em WordPress, migrando para Next.js com código limpo e escalável.",
        "Fui responsável pelo redesign e desenvolvimento da página inicial da empresa com React e Tailwind CSS, criando uma interface moderna e estratégica.",
        "Desenvolvi landing pages e sistemas web aplicando boas práticas de SEO, versionamento com Git/GitHub e metodologias ágeis (Scrum e Kanban).",
        "Criei um site completo para um escritório de advocacia com interface interativa e animações, destacando a experiência do usuário e o valor da marca."
      ],
      skills: ["React", "Next.js", "Tailwind CSS", "SEO", "APIs REST", "Git", "Scrum", "Kanban"]
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
                            <span className="text-blue-400 text-lg">▸</span>
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

          {/* Cursos e Certificações */}
          <div className="pb-24">
            <h2 className={`${oswald.className} text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-3`}>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              Cursos e Certificações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Certificado de Participação - Python Norte 2025</p>
                    <p className="text-gray-400 text-base mb-1">Even3</p>
                    <p className="text-gray-500 text-sm">Out 2025</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Scrum Utilitário</p>
                    <p className="text-gray-400 text-base mb-1">MindMaster Treinamentos</p>
                    <p className="text-gray-500 text-sm">Out 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Front-end do Zero</p>
                    <p className="text-gray-400 text-base mb-1">Rocketseat</p>
                    <p className="text-gray-500 text-sm">Out 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Semana Ubíqua</p>
                    <p className="text-gray-400 text-base mb-1">UNAMA</p>
                    <p className="text-gray-500 text-sm">Jun 2024</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">React</span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">API REST</span>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Introdução ao Front-End Development</p>
                    <p className="text-gray-400 text-base mb-1">Meta via Coursera</p>
                    <p className="text-gray-500 text-sm">Mai 2024</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">CSS</span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">Bootstrap</span>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Desenvolvimento Web: HTML, CSS, JS, React, TS</p>
                    <p className="text-gray-400 text-base mb-1">Udemy</p>
                    <p className="text-gray-500 text-sm">Abr 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Scrum Fundamentals Certified (SFC)</p>
                    <p className="text-gray-400 text-base mb-1">SCRUMstudy - Accreditation Body</p>
                    <p className="text-gray-500 text-sm">Abr 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Formação Java</p>
                    <p className="text-gray-400 text-base mb-1">Rocketseat</p>
                    <p className="text-gray-500 text-sm">Mar 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Trabalhando em um Mundo Digital</p>
                    <p className="text-gray-400 text-base mb-1">IBM</p>
                    <p className="text-gray-500 text-sm">Mar 2024</p>
                  </div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                </div>
              </CometCard>

              <CometCard rotateDepth={12} translateDepth={12}>
                <div className="relative p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <p className="text-white font-semibold text-lg mb-2">Bootcamp &ldquo;Semana do Herói&rdquo;</p>
                    <p className="text-gray-400 text-base mb-1">Hero Code</p>
                    <p className="text-gray-500 text-sm">Fev 2024</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">Next.js</span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">WebRTC</span>
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
                    <p className="text-gray-400 text-base mb-1">DIO</p>
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
                    <p className="text-gray-400 text-base mb-1">DIO</p>
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
                    <p className="text-gray-400 text-base mb-1">DIO</p>
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
                    <p className="text-gray-400 text-base mb-1">DIO</p>
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

    </>
  );
}
