import { Translations } from "./types";

export const ptBR: Translations = {
  home: {
    heroLine1: "código, design e ",
    heroLine2: "performance.",
    subtitle: "Full Stack Developer & UI/UX Enthusiast",
    viewProjects: "Ver Projetos",
    getInTouch: "Entre em contato",
  },
  about: {
    headingPrefix: "Sobre ",
    headingHighlight: "mim",
    bioParagraphs: [
      "Olá! Sou o Douglas, Engenheiro de Software com mais de 3 anos de experiência, especializado em desenvolvimento full-stack e tecnologias web modernas. Minha jornada vai do frontend à arquitetura backend, com foco na construção de aplicações escaláveis e centradas no usuário usando React, Next.js, React Native e TypeScript.",
      "Minha expertise inclui desenvolvimento front-end abrangente com HTML5, CSS3, JavaScript e ecossistema React avançado, além de soluções backend robustas. Arquitetei infraestruturas serverless usando serviços AWS como Lambda, API Gateway, DynamoDB, S3 e SES, garantindo escalabilidade e eficiência de custos.",
      "Atualmente, sou Frontend Developer na Pepperlaw AI, onde liderei uma reestruturação completa da UI de uma base de código gerada por IA, transformando-a em uma aplicação pixel-perfect e de alta performance. Desenvolvi um editor estilo Word com suporte a Markdown, comentários e exportação multi-formato, e integrei WOPI (Web Application Open Platform Interface).",
      "Aplico consistentemente as melhores práticas em otimização de SEO, ajuste de performance (alcançando pontuações de 95+ no Google PageSpeed), e qualidade de código. Minha abordagem combina excelência técnica com pensamento estratégico, sempre visando entregar soluções inovadoras que resolvem problemas do mundo real usando tecnologias de ponta e metodologias modernas de desenvolvimento.",
    ],
  },
  experience: {
    headingPrefix: "MINHA ",
    headingHighlight: "JORNADA",
    subtitle: "Experiências Profissionais, Formação e Certificações",
    professionalTitle: "Experiência Profissional",
    educationTitle: "Formação Acadêmica",
    certificationsTitle: "Cursos e Certificações",
    jobs: [
      {
        role: "Desenvolvedor Fullstack",
        company: "Pepperlaw AI",
        period: "Ago 2025 - Atual",
        location: "Remoto",
        description:
          "Entrei em um projeto com o front-end gerado com IA da Lovable, completamente desorganizado e cheio de falhas. Precisava reestruturar a UI para alinhar ao design do time de Design/UX e tornar o produto viável para clientes corporativos.",
        highlights: [
          "Liderei a reestruturação da UI utilizando React pixel-perfect com o design da equipe de Design/UX, criando componentes mais fáceis de manter, com melhora na performance, experiência do usuário, navegação fluida e responsiva.",
          "Desenvolvi um editor similar ao Word com suporte a Markdown, comentários e exportação em múltiplos formatos, além de integrar posteriormente o sistema ao WOPI (Web Application Open Platform Interface).",
          "Essa reformulação, feita em conjunto com a equipe de desenvolvimento, elevou a qualidade do produto, reduziu bugs críticos e contribuiu diretamente para a conquista do primeiro cliente corporativo da startup.",
        ],
        skills: ["React", "Markdown", "WOPI", "UI/UX", "Performance"],
      },
      {
        role: "Desenvolvedor Full Stack Pleno",
        company: "C2A Soluções em Tecnologia",
        period: "Out 2024 - Mar 2025",
        location: "Belém, Pará, Brasil",
        description:
          "Fui responsável por todo o ciclo de desenvolvimento de um aplicativo de reports urbanos em Belém do Pará, desde o levantamento de requisitos até a publicação nas lojas Android e iOS.",
        highlights: [
          "Desenvolvi o aplicativo completo utilizando React Native e Expo, cobrindo desde o levantamento de requisitos até a publicação nas lojas.",
          "Integrei as APIs do Google Maps e Google Places para permitir geolocalização e renderização em tempo real dos pontos reportados.",
          "Estruturei o backend do zero em arquitetura serverless usando AWS Lambda, API Gateway, S3, DynamoDB e SES, garantindo escalabilidade e baixo custo de operação.",
          "Entreguei um sistema completo, funcional e estável, que atendeu integralmente às necessidades do cliente e passou a operar em produção sem incidentes, sendo colocado na Play Store.",
        ],
        skills: [
          "React Native",
          "Expo",
          "AWS Lambda",
          "DynamoDB",
          "Google Maps API",
          "API Gateway",
          "S3",
          "SES",
        ],
      },
      {
        role: "Desenvolvedor Back End Pleno",
        company: "Avatech",
        period: "Abr 2024 - Mar 2025",
        location: "Remoto",
        description:
          "Fui contratado como freelancer para desenvolver um sistema serverless completo do zero, utilizando Firebase Cloud Functions, Firestore e Node.js.",
        highlights: [
          "Criei um sistema de quizzes com IA baseado em LLMs, permitindo a geração automática de provas personalizadas e correção inteligente conforme as regras de negócio.",
          "Implementei um sistema de agendamento automático que ajusta a dificuldade das provas conforme o desempenho do aluno.",
          "Integrei a Stripe para pagamentos por assinatura e links dinâmicos, entregando um sistema sólido e seguro, com checkout otimizado e alta taxa de retenção.",
        ],
        skills: [
          "Firebase",
          "Cloud Functions",
          "Firestore",
          "Node.js",
          "LLMs",
          "Stripe",
          "Serverless",
        ],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "CASTA Tecnologia",
        period: "Ago 2022 - Jul 2024",
        location: "Belém, Pará, Brasil",
        description:
          "Atuei no desenvolvimento e manutenção de projetos web profissionais, incluindo reconstruções completas de sites, landing pages e sistemas com foco em performance, SEO e experiência do usuário.",
        highlights: [
          "Implementei integrações com APIs REST e otimizações de SEO e velocidade (Google PageSpeed 95+), garantindo alto desempenho e usabilidade.",
          "Reconstruí completamente um site de advocacia antes feito em WordPress, migrando para Next.js com código limpo e escalável.",
          "Fui responsável pelo redesign e desenvolvimento da página inicial da empresa com React e Tailwind CSS, criando uma interface moderna e estratégica.",
          "Desenvolvi landing pages e sistemas web aplicando boas práticas de SEO, versionamento com Git/GitHub e metodologias ágeis (Scrum e Kanban).",
          "Criei um site completo para um escritório de advocacia com interface interativa e animações, destacando a experiência do usuário e o valor da marca.",
        ],
        skills: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "SEO",
          "APIs REST",
          "Git",
          "Scrum",
          "Kanban",
        ],
      },
    ],
    education: {
      degree: "Bacharel em Ciência da Computação",
      university: "UNAMA - Universidade da Amazônia",
      location: "Belém, Pará, Brasil",
      period: "Fev 2022 - Dez 2025",
    },
    certifications: [
      {
        title: "Certificado de Participação - Python Norte 2025",
        institution: "Even3",
        date: "Out 2025",
      },
      {
        title: "Scrum Utilitário",
        institution: "MindMaster Treinamentos",
        date: "Out 2024",
      },
      {
        title: "Front-end do Zero",
        institution: "Rocketseat",
        date: "Out 2024",
      },
      {
        title: "Semana Ubíqua",
        institution: "UNAMA",
        date: "Jun 2024",
        tags: ["React", "API REST"],
      },
      {
        title: "Introdução ao Front-End Development",
        institution: "Meta via Coursera",
        date: "Mai 2024",
        tags: ["CSS", "Bootstrap"],
      },
      {
        title: "Desenvolvimento Web: HTML, CSS, JS, React, TS",
        institution: "Udemy",
        date: "Abr 2024",
      },
      {
        title: "Scrum Fundamentals Certified (SFC)",
        institution: "SCRUMstudy - Accreditation Body",
        date: "Abr 2024",
      },
      {
        title: "Formação Java",
        institution: "Rocketseat",
        date: "Mar 2024",
      },
      {
        title: "Trabalhando em um Mundo Digital",
        institution: "IBM",
        date: "Mar 2024",
      },
      {
        title: 'Bootcamp "Semana do Herói"',
        institution: "Hero Code",
        date: "Fev 2024",
        tags: ["Next.js", "WebRTC"],
      },
      {
        title: "Páginas Web com HTML5",
        institution: "DIO",
        date: "Ago 2023",
      },
      {
        title: "Técnicas Lógicas para JavaScript",
        institution: "DIO",
        date: "Ago 2023",
      },
      {
        title: "Estilizando Páginas com CSS",
        institution: "DIO",
        date: "Ago 2023",
      },
      {
        title: "Versionamento de Código com Git",
        institution: "DIO",
        date: "Ago 2023",
      },
      {
        title: "JavaScript",
        institution: "Curso em Vídeo",
        date: "Out 2020",
      },
      {
        title: "DISCOVER",
        institution: "Rocketseat",
        date: "Jun 2020",
      },
    ],
  },
  projects: {
    heroLine1: "Criando Soluções",
    heroLine2: "Digitais",
    heroHighlight: "Incríveis",
    heroDescription:
      "Desenvolvedor full stack apaixonado por transformar ideias em produtos digitais elegantes e funcionais. Especializado em tecnologias modernas como React, Next.js e TypeScript.",
    heroSubDescription:
      "Projetos freelancer e desenvolvidos do zero, criados com dedicação e atenção aos detalhes.",
    techHeadingPrefix: "TECNOLOGIAS ",
    techHeadingHighlight: "UTILIZADAS",
    techSubtitle:
      "Conheça as stacks tecnológicas por trás de cada projeto",
    statProjects: "Projetos Concluídos",
    statTech: "Tecnologias e Ferramentas",
    statYears: "Anos de Experiência",
    cards: [
      {
        title: "Moonbeam",
        description: "Plataforma de escrita assistida por IA",
        stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS", "PostgreSQL"],
        category: "IA & Produtividade",
      },
      {
        title: "Cursor",
        description: "Editor de código com IA integrada",
        stack: ["React", "Electron", "Node.js", "AI Models", "Monaco Editor"],
        category: "Ferramentas de Desenvolvimento",
      },
      {
        title: "Rogue",
        description: "Sistema de gerenciamento de projetos",
        stack: ["Vue.js", "Express", "MongoDB", "Socket.io", "Redis"],
        category: "Gerenciamento",
      },
      {
        title: "Editorially",
        description: "Editor colaborativo em tempo real",
        stack: ["React", "Slate.js", "WebSockets", "Node.js", "AWS"],
        category: "Colaboração",
      },
      {
        title: "Editrix AI",
        description: "Editor de conteúdo com IA",
        stack: ["Next.js", "GPT-4", "Supabase", "Vercel", "Tailwind CSS"],
        category: "IA & Edição",
      },
      {
        title: "Pixel Perfect",
        description: "Ferramenta de design para desenvolvedores",
        stack: ["React", "Three.js", "WebGL", "TypeScript", "Framer Motion"],
        category: "Design & UI",
      },
      {
        title: "Algochurn",
        description: "Plataforma de prática de algoritmos",
        stack: ["React", "Python", "FastAPI", "Docker", "PostgreSQL"],
        category: "Educação",
      },
      {
        title: "Aceternity UI",
        description: "Biblioteca de componentes modernos",
        stack: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Radix UI",
        ],
        category: "UI Library",
      },
      {
        title: "Tailwind Master Kit",
        description: "Kit completo de templates Tailwind",
        stack: ["HTML", "Tailwind CSS", "Alpine.js", "PostCSS", "Vite"],
        category: "Templates",
      },
    ],
  },
  meta: {
    title: "Douglas Oliveira | Full Stack Developer",
    description: "Portfolio de Douglas Oliveira",
  },
};
